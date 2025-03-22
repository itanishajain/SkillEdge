import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mic,
  MicOff,
  AlertCircle,
  History,
  Plus,
  Settings,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import CryptoJS from "crypto-js";
import { useDispatch } from "react-redux";
import { ChatMessage } from "@/components/ChatMessage";
import { ApiKeyModal } from "@/components/ApiKeyModal";
import { ChatHistoryModal } from "@/components/ChatHistoryModal";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { Message } from "@/types";
import { createChat } from "@/store/chatSlice"; // Corrected import

const STORAGE_KEY = "skilledge_gemini_key";
const ENCRYPTION_KEY = "skilledge_secure_storage";

function SkillX() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [showApiModal, setShowApiModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const encrypted = localStorage.getItem(STORAGE_KEY);
    if (encrypted) {
      try {
        const decrypted = CryptoJS.AES.decrypt(
          encrypted,
          ENCRYPTION_KEY
        ).toString(CryptoJS.enc.Utf8);
        setApiKey(decrypted);
      } catch {
        console.error("Failed to decrypt API key");
      }
    }

    // if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    //   recognition.current = new (window.SpeechRecognition ||
    //     window.webkitSpeechRecognition)();
    //   recognition.current.continuous = true;
    //   recognition.current.interimResults = true;

    //   recognition.current.onresult = (event) => {
    //     const transcript = Array.from(event.results)
    //       .map((result) => result[0])
    //       .map((result) => result.transcript)
    //       .join("");
    //     setInput(transcript);
    //   };

    //   recognition.current.onerror = (event) => {
    //     console.error("Speech recognition error:", event.error);
    //     setIsListening(false);
    //   };
    // }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!apiKey) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setShowApiModal(true);
      return;
    }

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro-latest",
      }); // Updated model name
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: text,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => {
        const newMessages = [...prev, assistantMessage];
        dispatch(
          createChat({
            // Corrected action
            id: Date.now().toString(),
            name: input.slice(0, 50) + "...",
            messages: newMessages,
            createdAt: new Date(),
          })
        );
        return newMessages;
      });
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content:
            "Sorry, there was an error processing your request. Please make sure your API key is valid and try again.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleVoiceInput = () => {
    if (!recognition.current) return;

    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    } else {
      recognition.current.start();
      setIsListening(true);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleEditMessage = (messageId: string, newContent: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, content: newContent } : msg
      )
    );
  };

  const handleRollback = (messageId: string) => {
    setMessages((prev) => {
      const index = prev.findIndex((msg) => msg.id === messageId);
      return prev.slice(0, index + 1);
    });
  };

  return (
    <div className="mt-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="relative min-h-screen text-white"
      >
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            >
              <AlertCircle className="w-5 h-5" />
              <span>Please add your API key to continue</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed top-4 right-4 flex items-center gap-2 z-40">
          <div className="flex gap-2 backdrop-blur-sm p-1 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHistoryModal(true)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Chat History"
            >
              <History className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewChat}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="New Chat"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowApiModal(true)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <main className="overflow-y-auto pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-0">
            <AnimatePresence mode="wait">
              {messages.length === 0 ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="pt-8"
                >
                  <WelcomeScreen logo="/skilledge-logo.svg" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 pt-8"
                >
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      onEdit={handleEditMessage}
                      onRollback={handleRollback}
                    />
                  ))}
                  {isLoading && <LoadingIndicator />}
                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-background to-transparent pt-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <form
              onSubmit={handleSubmit}
              className="relative flex items-end bg-gray-800 rounded-xl shadow-lg"
            >
              <TextareaAutosize
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-transparent rounded-xl pl-4 pr-24 py-3 focus:outline-none resize-none max-h-48 text-sm sm:text-base"
                minRows={1}
                maxRows={5}
              />
              <div className="absolute right-2 bottom-2 flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={toggleVoiceInput}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                >
                  {isListening ? (
                    <MicOff className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <ApiKeyModal
          isOpen={showApiModal}
          onClose={() => setShowApiModal(false)}
          onSave={setApiKey}
          onRemove={() => setApiKey(null)}
          hasExistingKey={!!apiKey}
        />

        <ChatHistoryModal
          isOpen={showHistoryModal}
          onClose={() => setShowHistoryModal(false)}
        />
      </motion.div>
    </div>
  );
}

export default SkillX;

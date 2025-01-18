import { useState, useEffect } from 'react';
import { MessageSquareMore, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function LiveChat() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isConnected) {
      // Simulated welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isConnected]);

  const simulateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "I understand your concern. Let me help you with that.",
        "Thank you for providing that information. Let me check this for you.",
        "I'm looking into this right now.",
        "Is there anything else you'd like to know about this?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    simulateResponse();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isConnected) {
    return (
      <div className="max-w-md mx-auto text-center py-12 space-y-4">
        <MessageSquareMore className="h-12 w-12 mx-auto text-primary" />
        <h3 className="text-xl font-semibold">Live Chat Support</h3>
        <p className="text-gray-400">
          Our support team is available to help you with any questions.
        </p>
        <Button 
          onClick={() => setIsConnected(true)}
          className="w-full md:w-auto"
        >
          Start Chat
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto rounded-lg bg-black w-full">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Live Support</h3>
        <p className="text-sm text-gray-400">We typically reply in a few minutes</p>
      </div>

      <ScrollArea className="h-[400px] p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-2.5",
                message.sender === 'user' ? 'flex-row-reverse' : ''
              )}
            >
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                message.sender === 'user' ? 'bg-primary' : 'bg-gray-800'
              )}>
                {message.sender === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </div>
              <div className={cn(
                "rounded-lg px-4 py-2 max-w-[80%]",
                message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
              )}>
                <p className="text-sm">{message.text}</p>
                <span className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-gray-400">
              <Bot className="h-5 w-5" />
              <span className="text-sm">Agent is typing...</span>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
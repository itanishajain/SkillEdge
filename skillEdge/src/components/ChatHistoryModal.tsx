import React from 'react';
import { X, MessageSquare, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setCurrentChat, deleteChat } from '@/store/chatSlice';
import { Chat } from '@/types';

interface ChatHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatHistoryModal: React.FC<ChatHistoryModalProps> = ({
  isOpen,
  onClose
}) => {
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chat.chats);
  const currentChatId = useSelector((state: RootState) => state.chat.currentChatId);

  const handleSelectChat = (chatId: string) => {
    dispatch(setCurrentChat(chatId));
    onClose();
  };

  const handleDeleteChat = (chat: Chat) => {
    if (window.confirm(`Are you sure you want to delete "${chat.name}"?`)) {
      dispatch(deleteChat(chat.id));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900 rounded-lg p-6 w-full max-w-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Chat History</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                  chat.id === currentChatId
                    ? 'bg-blue-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <button
                  className="flex items-center space-x-3 flex-1"
                  onClick={() => handleSelectChat(chat.id)}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm truncate">{chat.name}</span>
                </button>
                <button
                  onClick={() => handleDeleteChat(chat)}
                  className="p-1 hover:bg-gray-600 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
                </button>
              </div>
            ))}

            {chats.length === 0 && (
              <p className="text-gray-400 text-center py-4">No chat history</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
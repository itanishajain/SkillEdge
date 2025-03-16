import React from 'react';
import { History, Plus, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNewChat: () => void;
  onOpenHistory: () => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNewChat,
  onOpenHistory,
  onOpenSettings
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 z-10"
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/skilledge-logo.svg"
            alt="Skilledge"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skilledge AI
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenHistory}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Chat History"
          >
            <History className="w-5 h-5" />
          </button>
          <button
            onClick={onNewChat}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="New Chat"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenSettings}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
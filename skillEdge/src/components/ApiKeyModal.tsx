import React, { useState } from 'react';
import { X, Key, ExternalLink, AlertCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CryptoJS from 'crypto-js';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
  onRemove: () => void;
  hasExistingKey: boolean;
}

const STORAGE_KEY = 'skilledge_gemini_key';
const ENCRYPTION_KEY = 'skilledge_secure_storage';

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onRemove,
  hasExistingKey
}) => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const [showConfirmRemove, setShowConfirmRemove] = useState(false);

  const validateApiKey = (key: string) => {
    if (key.length < 32) {
      return 'API key seems too short';
    }
    return '';
  };

  const handleSave = () => {
    const validationError = validateApiKey(apiKey);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const encrypted = CryptoJS.AES.encrypt(apiKey, ENCRYPTION_KEY).toString();
      localStorage.setItem(STORAGE_KEY, encrypted);
      onSave(apiKey);
      onClose();
    } catch {
      setError('Failed to save API key');
    }
  };

  const handleRemove = () => {
    if (showConfirmRemove) {
      localStorage.removeItem(STORAGE_KEY);
      onRemove();
      setShowConfirmRemove(false);
      onClose();
    } else {
      setShowConfirmRemove(true);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900 rounded-lg p-4 sm:p-6 w-full max-w-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              {hasExistingKey ? 'Update API Key' : 'Enter API Key'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="mb-6">
            <a
              href="https://makersuite.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4 text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4" />
              Get your API key from Google Cloud Console
            </a>

            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  setError('');
                  setShowConfirmRemove(false);
                }}
                placeholder="Enter your API key"
                className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 mt-2 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            {hasExistingKey && (
              <button
                onClick={handleRemove}
                className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
              >
                <Trash2 className="w-4 h-4" />
                {showConfirmRemove ? 'Confirm Remove' : 'Remove Key'}
              </button>
            )}
            <div className="flex gap-4 ml-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!apiKey.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Save Key
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
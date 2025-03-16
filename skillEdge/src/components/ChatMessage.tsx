import React, { useState } from 'react';
import { Copy, Check, Edit2, Save, X, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import { Message } from '@/types';

interface ChatMessageProps {
  message: Message;
  onEdit?: (messageId: string, content: string) => void;
  onRollback?: (messageId: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onEdit, onRollback }) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (onEdit && editContent.trim() !== message.content) {
      onEdit(message.id, editContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(message.content);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`relative group max-w-[85%] sm:max-w-[80%] rounded-lg p-3 sm:p-4 ${
          message.role === 'user'
            ? 'bg-blue-600 bg-opacity-90 backdrop-blur-sm text-white'
            : 'bg-gray-800 bg-opacity-90 backdrop-blur-sm text-gray-100'
        }`}
      >
        {message.role === 'user' && !isEditing && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 hover:bg-gray-700/50 rounded transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onRollback?.(message.id)}
              className="p-1 hover:bg-gray-700/50 rounded transition-colors"
              title="Roll back to this point"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}

        {isEditing && message.role === 'user' ? (
          <div className="space-y-2">
            <TextareaAutosize
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full bg-gray-700 rounded p-2 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              minRows={2}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="p-1 hover:bg-gray-600 rounded"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={handleSave}
                className="p-1 hover:bg-blue-500 rounded"
              >
                <Save className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 text-sm sm:text-base">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="relative mt-2 group">
                        <div className="absolute right-2 top-2 flex gap-2">
                          <button
                            onClick={() => copyToClipboard(String(children))}
                            className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                          >
                            {copied ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <SyntaxHighlighter
                          {...props}
                          style={atomDark}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{ fontSize: '0.9rem' }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
            {message.role === 'assistant' && (
              <button
                onClick={() => copyToClipboard(message.content)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-700/50 rounded"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
            <div className="text-xs opacity-50 mt-2">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
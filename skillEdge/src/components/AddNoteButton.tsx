import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddNoteButtonProps {
  onClick: () => void;
}

export const AddNoteButton = ({ onClick }: AddNoteButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      onClick={onClick}
    >
      <Plus size={24} className="text-white" />
    </motion.button>
  );
};
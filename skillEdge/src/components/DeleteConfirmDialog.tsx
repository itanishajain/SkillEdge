import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
}

export const DeleteConfirmDialog = ({ isOpen, onClose, onConfirm, title }: DeleteConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-gray-900 rounded-lg border border-gray-700 max-w-md w-full mx-4 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200 uppercase mb-2">Delete Note!</h3>
                <p className="text-gray-400">Are you sure you want to delete "{title}"? This action cannot be undone.</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-900/50 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
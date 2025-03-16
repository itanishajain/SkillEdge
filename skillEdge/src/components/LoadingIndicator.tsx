import React from 'react';
import { motion } from 'framer-motion';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <motion.div
        className="text-blue-400 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          SkillX is thinking
        </motion.span>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          .
        </motion.span>
      </motion.div>
    </div>
  );
};
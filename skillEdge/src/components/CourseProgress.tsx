import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy } from 'lucide-react';

interface CourseProgressProps {
  progress: number;
}

export const CourseProgressBadge: React.FC<CourseProgressProps> = ({ progress }) => {
  const isCompleted = progress === 100;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`absolute top-4 right-4 ${
        isCompleted ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 'bg-gray-800'
      } rounded-full p-3`}
    >
      {isCompleted ? (
        <Trophy className="w-5 h-5 text-white" />
      ) : (
        <Shield className="w-5 h-5 text-gray-400" />
      )}
    </motion.div>
  );
};
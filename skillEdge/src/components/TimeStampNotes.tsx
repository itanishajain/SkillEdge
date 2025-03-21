import React, { useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Pencil, Clock, Save, X } from 'lucide-react';
import { useCourseStore } from '../store/courseStore';

interface TimeStampNotesProps {
  courseId: string;
  chapterId: string;
  currentTime: number;
}

export const TimeStampNotes: React.FC<TimeStampNotesProps> = ({
  courseId,
  chapterId,
  currentTime,
}) => {
  const [newNote, setNewNote] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { notes, addNote } = useCourseStore();
  const courseNotes = notes.filter(
    (note) => note.courseId === courseId && note.chapterId === chapterId
  );

  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote({
        courseId,
        chapterId,
        timestamp: currentTime,
        content: newNote.trim(),
      });
      setNewNote('');
      setIsAdding(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Timestamp Notes</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAdding(true)}
          className="bg-blue-500/20 text-blue-500 p-2 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          <Pencil className="w-5 h-5" />
        </motion.button>
      </div>

      {isAdding && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-start space-x-2 mb-4">
            <div className="bg-blue-500/20 text-blue-500 p-2 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-blue-500 font-medium">
              {formatTime(currentTime)}
            </span>
          </div>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add your note here..."
            className="w-full bg-gray-900/50 rounded-xl p-4 mb-4 border border-gray-700/50 focus:outline-none focus:border-blue-500/50 resize-none"
            rows={3}
          />
          <div className="flex justify-end space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAdding(false)}
              className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddNote}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Note</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {courseNotes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50"
          >
            <div className="flex items-center space-x-3 mb-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-blue-500 font-medium">
                  {formatTime(note.timestamp)}
                </span>
              </div>
              <span>•</span>
              <span>{format(new Date(note.createdAt), 'MMM d, yyyy')}</span>
            </div>
            <p className="text-gray-300">{note.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
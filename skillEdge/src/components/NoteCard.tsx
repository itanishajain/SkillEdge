import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Pin, Trash2, Tag } from 'lucide-react';
import { Note } from '@/types/note';
import { useNotesStore } from '@/store/useNotesStore';
import { DeleteConfirmDialog } from '@/components/DeleteConfirmDialog';

interface NoteCardProps {
  note: Note;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const { togglePin, deleteNote } = useNotesStore();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    deleteNote(note.id);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gray-900 rounded-lg border border-gray-800 p-6 relative group"
      >
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => togglePin(note.id)}
            className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${
              note.pinned ? 'text-yellow-400' : 'text-gray-400'
            }`}
          >
            <Pin size={18} />
          </button>
          <button
            onClick={() => setShowDeleteDialog(true)}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-red-400 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <h3 className="text-xl font-semibold text-blue-400 mb-3 pr-20">{note.title}</h3>
        <div
          className="text-gray-300 mb-4 prose"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
        
        <div className="flex flex-wrap gap-2 mb-3">
          {note.labels.map((label) => (
            <span
              key={label}
              className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-700 text-blue-400 border border-gray-600"
            >
              <Tag size={12} />
              {label}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            Updated on {format(new Date(note.updatedAt), 'MMM d, yyyy, h:mm a')}
          </span>
          {note.pinned && (
            <span className="flex items-center gap-1 text-yellow-400">
              <Pin size={15} /> Pinned
            </span>
          )}
        </div>
      </motion.div>

      <DeleteConfirmDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
        title={note.title}
      />
    </>
  );
};
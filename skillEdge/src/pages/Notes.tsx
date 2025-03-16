import { useState } from "react";
import { motion } from "framer-motion";
import { Notebook } from "lucide-react";
import { NoteCard } from "@/components/NoteCard";
import { AddNoteButton } from "@/components/AddNoteButton";
import { SearchBar } from "@/components/NoteSearch";
import { useNotesStore } from "@/store/useNotesStore";
import { Note } from "@/types/note";
import { Editor } from "@/components/Editor";

function Notes() {
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const { notes, view, searchQuery, addNote } = useNotesStore();

  const handleAddNote = () => {
    if (newNote.title || newNote.content) {
      const note: Note = {
        id: crypto.randomUUID(),
        title: newNote.title || "Untitled",
        content: newNote.content,
        color: "",
        labels: [],
        pinned: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        archived: false,
      };
      addNote(note);
      setNewNote({ title: "", content: "" });
    }
    setIsAddingNote(false);
  };

  const filteredNotes = notes
    .filter((note) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        note.title.toLowerCase().includes(searchLower) ||
        note.content.toLowerCase().includes(searchLower)
      );
    })
    .sort(
      (a, b) => (b.pinned ? 1 : -1) || (b.updatedAt > a.updatedAt ? 1 : -1)
    );

  return (
    <div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="flex items-center gap-4 mb-8 mt-6">
              <div className="relative">
                <Notebook size={50} className="text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent uppercase">
                  <span className="shining-text ">Your Findings</span>
                </h1>
                <p className="bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent text-sm uppercase">
                  Capture thoughts in your own style
                </p>
              </div>
            </header>

            <SearchBar />

            {isAddingNote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <input
                  type="text"
                  placeholder="Title"
                  value={newNote.title}
                  onChange={(e) =>
                    setNewNote({ ...newNote, title: e.target.value })
                  }
                  className="w-full mb-4 p-4 bg-gray-900 rounded-lg border border-gray-800 text-gray-100 text-xl font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Editor
                  content={newNote.content}
                  onChange={(content) => setNewNote({ ...newNote, content })}
                  placeholder="Take a note..."
                />
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setIsAddingNote(false)}
                    className="px-6 py-2 text-gray-400 hover:text-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddNote}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add Note
                  </button>
                </div>
              </motion.div>
            )}

            <div
              className={`grid gap-6 ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-2xl mx-auto"
              }`}
            >
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
            <AddNoteButton onClick={() => setIsAddingNote(true)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;

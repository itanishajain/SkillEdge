import { create } from 'zustand';
import { Note } from '../types/note';

interface NotesState {
  notes: Note[];
  view: 'grid' | 'list';
  searchQuery: string;
  activeLabels: string[];
  addNote: (note: Note) => void;
  updateNote: (id: string, note: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  togglePin: (id: string) => void;
  setView: (view: 'grid' | 'list') => void;
  setSearchQuery: (query: string) => void;
  toggleLabel: (label: string) => void;
}

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  view: 'grid',
  searchQuery: '',
  activeLabels: [],
  addNote: (note) =>
    set((state) => ({ notes: [note, ...state.notes] })),
  updateNote: (id, updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
  togglePin: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      ),
    })),
  setView: (view) => set({ view }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  toggleLabel: (label) =>
    set((state) => ({
      activeLabels: state.activeLabels.includes(label)
        ? state.activeLabels.filter((l) => l !== label)
        : [...state.activeLabels, label],
    })),
}));
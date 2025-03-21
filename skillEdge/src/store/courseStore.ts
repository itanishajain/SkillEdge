import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Note {
  id: string;
  courseId: string;
  chapterId: string;
  timestamp: number;
  content: string;
  createdAt: Date;
}

interface CourseProgress {
  courseId: string;
  chapterId: string;
  progress: number;
  lastWatched: number;
}

interface CourseStore {
  notes: Note[];
  progress: CourseProgress[];
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
  updateProgress: (progress: CourseProgress) => void;
  getNotesByCourse: (courseId: string) => Note[];
  getProgressByCourse: (courseId: string) => CourseProgress[];
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      notes: [],
      progress: [],
      addNote: (note) => {
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...note,
              id: Math.random().toString(36).substring(7),
              createdAt: new Date(),
            },
          ],
        }));
      },
      updateProgress: (progress) => {
        set((state) => {
          const existingIndex = state.progress.findIndex(
            (p) => p.courseId === progress.courseId && p.chapterId === progress.chapterId
          );

          if (existingIndex > -1) {
            const newProgress = [...state.progress];
            newProgress[existingIndex] = progress;
            return { progress: newProgress };
          }

          return { progress: [...state.progress, progress] };
        });
      },
      getNotesByCourse: (courseId) => {
        return get().notes.filter((note) => note.courseId === courseId);
      },
      getProgressByCourse: (courseId) => {
        return get().progress.filter((progress) => progress.courseId === courseId);
      },
    }),
    {
      name: 'course-storage',
    }
  )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Roadmap } from '../types/roadmap';

interface RoadmapStore {
  savedRoadmaps: Roadmap[];
  toggleSave: (roadmap: Roadmap) => void;
  isRoadmapSaved: (id: string) => boolean;
}

export const useRoadmapStore = create<RoadmapStore>()(
  persist(
    (set, get) => ({
      savedRoadmaps: [],
      toggleSave: (roadmap) => {
        const isAlreadySaved = get().savedRoadmaps.some((r) => r.id === roadmap.id);
        if (isAlreadySaved) {
          set((state) => ({
            savedRoadmaps: state.savedRoadmaps.filter((r) => r.id !== roadmap.id),
          }));
        } else {
          set((state) => ({
            savedRoadmaps: [...state.savedRoadmaps, roadmap],
          }));
        }
      },
      isRoadmapSaved: (id) => get().savedRoadmaps.some((r) => r.id === id),
    }),
    {
      name: 'roadmap-storage',
    }
  )
);
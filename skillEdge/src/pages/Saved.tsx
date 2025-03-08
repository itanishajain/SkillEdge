// import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked } from 'lucide-react';
import { useRoadmapStore } from '../store/useRoadmapStore';
import RoadmapCard from '../components/RoadmapCard';

export default function Saved() {
  const savedRoadmaps = useRoadmapStore((state) => state.savedRoadmaps);

  return (
    <div className="min-h-screen pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <BookMarked className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Saved Roadmaps</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your collection of saved learning paths. Keep track of the roadmaps you want to follow.
          </p>
        </motion.div>

        {savedRoadmaps.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No roadmaps saved yet.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedRoadmaps.map((roadmap) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <RoadmapCard roadmap={roadmap} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

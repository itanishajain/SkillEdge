import { useState, useMemo } from "react";
import { Compass, BookMarked, Trophy, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { roadmaps } from "@/data/roadmaps";
import RoadmapCard from "@/components/RoadmapCard";
import SearchBar from "@/components/SearchBar";

function CategorySection({
  category,
  roadmaps: categoryRoadmaps,
  onRoadmapClick,
}: {
  category: string;
  roadmaps: typeof roadmaps;
  onRoadmapClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (categoryRoadmaps.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-700"></div>
      </div>
      <div className="relative flex justify-between items-center">
      <h2 className="pr-3 text-2xl font-bold bg-gradient-to-r from-red-300 to-purple-900 text-transparent bg-clip-text uppercase shadow-lg px-4 py-2 rounded-md">
          {category}
        </h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-blue-400" />
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryRoadmaps.map((roadmap) => (
                <motion.div
                  key={roadmap.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <RoadmapCard roadmap={roadmap} onCardClick={onRoadmapClick} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function RoadMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleRoadmapClick = () => {
    setSearchTerm("");
  };

  const filteredRoadmaps = useMemo(() => {
    if (!searchTerm) return roadmaps;
    const term = searchTerm.toLowerCase();
    return roadmaps.filter(
      (roadmap) =>
        roadmap.title.toLowerCase().includes(term) ||
        roadmap.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const categories = useMemo(
    () => Array.from(new Set(filteredRoadmaps.map((r) => r.category))),
    [filteredRoadmaps]
  );

  return (
    <div className="mt-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <Compass className="w-16 h-16 text-blue-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:text-2xl md:text-5xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text uppercase"
          >
            <span className="shining-text ">Learners RoadMap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent mb-8 max-w-2xl mx-auto"
          >
            Choose your path and start your journey in software development with
            our comprehensive learning roadmaps
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {roadmaps.length}+
              </div>
              <div className="text-gray-400">Learning Paths</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <BookMarked className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {categories.length}
              </div>
              <div className="text-gray-400">Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <Compass className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400">Free Resources</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Search and Roadmaps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="space-y-16">
          {categories.map((category) => (
            <CategorySection
              key={category}
              category={category}
              roadmaps={filteredRoadmaps.filter(
                (roadmap) => roadmap.category === category
              )}
              onRoadmapClick={handleRoadmapClick}
            />
          ))}
          {filteredRoadmaps.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No roadmaps found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;

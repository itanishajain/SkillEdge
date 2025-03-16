import { Search, Grid, List as ListIcon, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNotesStore } from '../store/useNotesStore';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery, view, setView } = useNotesStore();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="flex-1 relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700/50"
        />
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setView('grid')}
          className={`p-3 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-colors ${
            view === 'grid' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          <Grid size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setView('list')}
          className={`p-3 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-colors ${
            view === 'list' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          <ListIcon size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl border border-gray-700/50 bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 backdrop-blur-sm transition-colors"
        >
          <SlidersHorizontal size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};
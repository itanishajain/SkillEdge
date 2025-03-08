import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-2xl mx-auto mb-12"
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          mb: { xs: 4, md: 8 },
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <InputBase
          sx={{
            ml: 5,
            flex: 1,
            color: 'white',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1, sm: 1.5 },
          }}
          placeholder="Search roadmaps..."
          inputProps={{ 'aria-label': 'search roadmaps' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          type="button"
          sx={{
            p: { xs: '8px', sm: '10px' },
            color: 'primary.main',
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </motion.div>
  );
}

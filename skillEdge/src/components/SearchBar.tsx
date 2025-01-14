import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar() {
  return (
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
      <InputBase
        sx={{ 
          ml: 1, 
          flex: 1, 
          color: 'white',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          py: { xs: 1, sm: 1.5 }
        }}
        placeholder="Search for help..."
        inputProps={{ 'aria-label': 'search help articles' }}
      />
      <IconButton 
        type="button" 
        sx={{ 
          p: { xs: '8px', sm: '10px' }, 
          color: 'primary.main' 
        }} 
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
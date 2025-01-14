import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { supportCategories } from '../data/help-data';
import * as Icons from '@mui/icons-material';
import { Container } from '@mui/material';

export function SupportCategories() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[`${iconName}Icon` as keyof typeof Icons];
    return IconComponent ? (
      <IconComponent 
        sx={{ 
          fontSize: { xs: 32, sm: 40 }, 
          color: 'primary.main' 
        }} 
      />
    ) : null;
  };

  return (
    <Container maxWidth="md" sx={{ mb: { xs: 4, md: 8 } }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: { xs: 3, md: 4 }, 
          color: 'white', 
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' }
        }}
      >
        Browse by Category
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {supportCategories.map((category, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  {getIcon(category.icon)}
                  <Box sx={{ ml: 2, flex: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'white',
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
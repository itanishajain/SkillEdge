import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '@/data/help-data';


export function FAQSection() {
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
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            mb: 2,
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
            sx={{ 
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 }
            }}
          >
            <Typography 
              sx={{ 
                color: 'white',
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
            <Typography 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
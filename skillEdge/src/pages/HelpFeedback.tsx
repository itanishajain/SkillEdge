import { Container, CssBaseline, ThemeProvider } from '@mui/material';


import theme from '@/theme';
import { SupportCategories } from '@/components/SupportCategories';
import { FAQSection } from '@/components/help/FAQSection';
import { ContactForm } from '@/components/help/ContactForm';
import { SearchBar } from '@/components/SearchBar';

function HelpFeedBack() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          {/* Header */}
          <Container maxWidth="md" sx={{ textAlign: 'center', mb: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
            <h1 style={{
              fontSize: 'clamp(1.875rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #e040fb 0%, #7c4dff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              padding: '0 8px',
            }}>
              Help & Support
            </h1>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              padding: '0 8px',
            }}>
              Find answers, contact support, and get the help you need
            </p>
          </Container>

          {/* Search */}
          <SearchBar />

          {/* Support Categories */}
          <SupportCategories />

          {/* FAQ Section */}
          <FAQSection />

          {/* Contact Form */}
          <ContactForm />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default HelpFeedBack;
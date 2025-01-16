export interface FAQItem {
    question: string;
    answer: string;
    category: string;
  }
  
  export interface SupportCategory {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    category: string;
  }
  
  export interface SearchSuggestion {
    id: string;
    title: string;
    category: string;
    url: string;
  }
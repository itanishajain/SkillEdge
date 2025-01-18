export interface FAQItem {
    question: string;
    answer: string;
    category: string;
  }
  
  export interface SupportTicket {
    id: string;
    subject: string;
    description: string;
    status: 'open' | 'in-progress' | 'resolved';
    priority: 'low' | 'medium' | 'high';
    createdAt: Date;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
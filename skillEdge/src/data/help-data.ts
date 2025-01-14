import { FAQItem, SupportCategory } from '@/types/help';

export const faqs: FAQItem[] = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
    category: "Account"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
    category: "Billing"
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website.",
    category: "Orders"
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all purchases. Contact our support team to initiate a refund.",
    category: "Billing"
  },
  {
    question: "How do I update my account information?",
    answer: "Log in to your account, go to 'Settings', and you can update your personal information, email, and preferences.",
    category: "Account"
  }
];

export const supportCategories: SupportCategory[] = [
  {
    title: "Account & Security",
    description: "Manage your account settings, security, and privacy",
    icon: "shield"
  },
  {
    title: "Billing & Payments",
    description: "View billing history, payment methods, and invoices",
    icon: "credit-card"
  },
  {
    title: "Orders & Shipping",
    description: "Track orders, shipping information, and returns",
    icon: "package"
  },
  {
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting",
    icon: "wrench"
  }
];
// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SearchBar } from "@/components/support/SearchBar";
import { FAQSection } from "@/components/support/FAQSection";
import { ContactForm } from "@/components/support/ContactForm";
import { TicketSystem } from "@/components/support/TicketSystem";
import { LiveChat } from "@/components/support/LiveChat";
import { Toaster } from "@/components/ui/sonner";
import {
  MessageSquare,
  Ticket,
  BookOpen,
  LifeBuoy,
  Users,
  Headphones,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface SupportTab {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  component: React.ReactNode;
}

const supportTabs: SupportTab[] = [
  {
    id: "faq",
    icon: <BookOpen className="w-6 h-6 "/>,
    title: "Knowledge Base",
    description: "Browse through our comprehensive FAQ and documentation",
    component: <FAQSection />,
  },
  {
    id: "contact",
    icon: <Mail className="w-6 h-6" />,
    title: "Contact Support",
    description: "Get in touch with our support team directly",
    component: <ContactForm />,
  },
  {
    id: "tickets",
    icon: <Ticket className="w-6 h-6" />,
    title: "Support Tickets",
    description: "Create and track your support requests",
    component: <TicketSystem />,
  },
  {
    id: "chat",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    component: <LiveChat />,
  },
];

const HelpSupport: React.FC = () => {
  return (
    <>
    <div className="mt-7">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="min-h-screen text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mt-16 top-16">
            {/* Left Section - Help Center Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-block p-3 rounded-full glass-effect"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <LifeBuoy className="w-12 h-12 text-white/80" />
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-200 to-gray-700 bg-clip-text text-transparent max-w-4xl uppercase">
                  Help Center
                </h1>
                <p className="text-lg tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent leading-relaxed">
                  Welcome to our support center. We're here to help you with any
                  questions or issues you might have.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-2xl p-4 space-y-2 border border-gray-800"
                >
                  <Users className="w-8 h-8 text-white/80" />
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-sm tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent">
                    Our team is always here to help
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-2xl p-4 space-y-2 border border-gray-800"
                >
                  <Clock className="w-8 h-8 text-white/80" />
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-sm tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent">
                    Average response time under 5 minutes
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-2xl p-4 space-y-2 border border-gray-800"
                >
                  <Headphones className="w-8 h-8 text-white/80" />
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="text-sm tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent">
                    Skilled professionals at your service
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-2xl p-4 space-y-2 border border-gray-800"
                >
                  <CheckCircle2 className="w-8 h-8 text-white/80" />
                  <h3 className="font-semibold">Guaranteed</h3>
                  <p className="text-sm tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent">
                    100% satisfaction guaranteed
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section - Support Options */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <SearchBar />

              {supportTabs.map((tab, index) => (
                <Dialog key={tab.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.01, delay: index * 0.01 }}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(52, 37, 52, 0.6)' }}
                      className="glass-effect rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg border border-gray-800 upp "
                    >
                      <div className="flex items-start gap-4 mt-1">
                        <div className="p-3 rounded-full glass-effect">
                          {tab.icon}
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold flex items-center gap-2 uppercase">
                            {tab.title}
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </h3>
                          <p className="text-gray-400 tracking-tight bg-gradient-to-r from-gray-400 to-purple-900 bg-clip-text text-transparent">{tab.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] bg-black border-gray-800">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tab.component}
                      </motion.div>
                    </AnimatePresence>
                  </DialogContent>
                </Dialog>
              ))}
            </motion.div>
          </div>
        </div>
        <Toaster theme="dark" position="bottom-right" />
      </div>
      </div>
    </>
  );
};

export default HelpSupport;

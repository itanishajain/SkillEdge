import React from "react";
import { motion } from "framer-motion";
import { Settings, ThumbsUp, Wrench, Wand2 } from "lucide-react";
import skillEdgeLogo from "@/img/SkillEdgeLogo.svg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
        <div className="absolute top-3 left-9 flex items-center space-x-2">
          <img
            src={skillEdgeLogo}
            alt="Logo"
            className="w-40 h-12"
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* <span className="text-primary text-2xl font-bold">SkillEdge</span> */}
        </div>
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            className="hidden lg:flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <Feature
                icon={<Settings className="w-6 h-6 text-[#3b82f6]" />}
                title="Personalized Learning"
                description="Tailored resources and tools to enhance your skill development journey, maximizing your learning efficiency."
              />
              <Feature
                icon={<Wrench className="w-6 h-6 text-[#3b82f6]" />}
                title="Comprehensive Resources"
                description="Access a wide range of learning materials designed to support you from fundamentals to advanced concepts."
              />
              <Feature
                icon={<ThumbsUp className="w-6 h-6 text-[#3b82f6]" />}
                title="Seamless User Experience"
                description="Effortlessly navigate through an intuitive interface, making your learning experience smooth and enjoyable."
              />
              <Feature
                icon={<Wand2 className="w-6 h-6 text-[#3b82f6]" />}
                title="Innovative Learning Tools"
                description="Utilize cutting-edge tools that empower you to build, enhance, and demonstrate your skills effectively."
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <motion.div
      className="flex items-start space-x-4"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-primary font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

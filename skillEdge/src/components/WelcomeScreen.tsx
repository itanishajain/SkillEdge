import React from 'react';
import { Bot, Keyboard, History, Mic } from 'lucide-react';

interface WelcomeScreenProps {
  logo: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ logo }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="relative mb-8">
        <img
          src={logo}
          alt="Skilledge Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 opacity-90"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none" /> */}
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase">
        Welcome to <span className="shining-text ">Skilledge AI</span> 
      </h1>
      <p className="bg-gradient-to-r from-white to-purple-800 bg-clip-text text-transparent max-w-2xl mb-8 text-sm sm:text-base">
        Your intelligent companion powered by Google's Gemini AI. Experience
        seamless conversations, code assistance, and knowledge sharing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
        <FeatureCard
          icon={<Bot className="w-6 h-6" />}
          title="Advanced AI"
          description="Powered by Google's Gemini for accurate responses"
        />
        <FeatureCard
          icon={<Keyboard className="w-6 h-6" />}
          title="Code Support"
          description="Syntax highlighting and copy functionality"
        />
        <FeatureCard
          icon={<History className="w-6 h-6" />}
          title="Chat History"
          description="Save and manage conversations"
        />
        <FeatureCard
          icon={<Mic className="w-6 h-6" />}
          title="Voice Input"
          description="Speak naturally with voice support"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
      <div className="text-blue-400 mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};
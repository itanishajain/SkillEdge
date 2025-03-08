import React from 'react';
import { 
  Monitor, 
  Server, 
  Settings, 
  Layers, 
  Building, 
  Shield,
  FileJson,
  FileType,
  FileCode,
  Coffee,
  FileCode2,
  Cog,
  Code,
  Code2,
  Component,
  Smartphone,
  Apple,
  Brain,
  LineChart,
  BarChart,
  Database,
  Box,
  CheckCircle,
  TestTube,
  Link,
  Network,
  Grape as Graph,
  Bookmark,
  ExternalLink,
  Check,
  Sparkles,
  WandSparkles,
  Gamepad2,
  SquarePen,
  InfinityIcon,
  UserRoundCheck,
  X,
  CogIcon,
  Binary,
  MonitorCog,
  CodeXml,
  SquareTerminal
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Roadmap } from '@/types/roadmap';
import { useRoadmapStore } from '@/store/useRoadmapStore';
import toast from 'react-hot-toast';
import { Toast } from './ui/toast';

interface RoadmapCardProps {
  roadmap: Roadmap;
  onCardClick?: () => void;
}

const iconMap = {
  Monitor,
  Server,
  Settings,
  Layers,
  Building,
  Shield,
  FileJson,
  FileType,
  FileCode,
  Coffee,
  FileCode2,
  Cog,
  Code,
  Code2,
  Component,
  Smartphone,
  Apple,
  Brain,
  LineChart,
  BarChart,
  Database,
  Box,
  CheckCircle,
  TestTube,
  Link,
  Network,
  Graph,
  Sparkles,
  WandSparkles,
  Gamepad2,
  SquarePen,
  InfinityIcon,
  UserRoundCheck,
  Binary,
  CogIcon,
  MonitorCog,
  CodeXml,
  SquareTerminal,
  Architecture: Building,
  Container: Box
};

export default function RoadmapCard({ roadmap, onCardClick }: RoadmapCardProps) {
  const { toggleSave, isRoadmapSaved } = useRoadmapStore();
  const isSaved = isRoadmapSaved(roadmap.id);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(roadmap);
    
    toast.custom(() => (
      <Toast className="bg-slate-900 border-slate-800">
        <div className="flex items-center gap-3">
          {isSaved ? (
            <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <X className="h-4 w-4 text-red-500" />
            </div>
          ) : (
            <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="h-4 w-4 text-green-500" />
            </div>
          )}
          <div className="text-sm font-medium text-slate-200">
            {isSaved ? 'Roadmap removed from favorites' : 'Roadmap saved to favorites!'}
          </div>
        </div>
      </Toast>
    ), {
      duration: 3000,
    });
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const IconComponent = () => {
    const icon = roadmap.icon;
  
    if (typeof icon === 'string') {
      if (icon.startsWith('<svg')) {
        // If it's an inline SVG string, render it directly
        return <span dangerouslySetInnerHTML={{ __html: icon }} />;
      } else if (icon.endsWith('.svg')) {
        // If it's a URL to an SVG file, render it using an <img> tag
        return <img src={icon} alt={roadmap.title} className="w-6 h-6" />;
      }
    }
  
    // If it's a valid Lucide icon name, render it from iconMap
    const LucideIcon = iconMap[icon as keyof typeof iconMap] || Monitor;
    return <LucideIcon className="w-6 h-6 text-blue-400" />;
  };
  

  return (
    <div 
      onClick={handleCardClick}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600/50 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors duration-300"
          >
            <IconComponent/>
          </motion.div>
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {roadmap.title}
          </h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className={`p-2 rounded-full transition-all duration-300 ${
            isSaved 
              ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' 
              : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-400 hover:text-white'
          }`}
          aria-label={isSaved ? 'Remove from favorites' : 'Save to favorites'}
        >
          <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </motion.button>
      </div>
      
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={roadmap.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
      >
        View Roadmap
        <ExternalLink className="w-4 h-4" />
      </motion.a>
    </div>
  );
}
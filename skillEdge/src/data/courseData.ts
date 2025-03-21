import { Code, Cloud, Brain, MessageSquare } from 'lucide-react';

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  progress: number;
  category: string;
  icon: React.ComponentType;
  videoUrl?: string;
  duration: string;
  students: number;
  rating: number;
  instructor: string;
  chapters: Chapter[];
  materials: Resource[];
  videoResources: Resource[];
}

export interface Chapter {
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string;
  description: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'pdf' | 'video' | 'link';
  size?: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'Data Structures & Algorithms Masterclass',
    description: 'Master fundamental DSA concepts with hands-on practice and real interview questions from FAANG companies',
    progress: 65,
    category: 'Software Development',
    icon: Code,
    duration: '40 hours',
    students: 15420,
    rating: 4.8,
    instructor: 'Dr. Sarah Chen',
    chapters: [
      {
        title: 'Introduction to Algorithm Analysis',
        duration: '45 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=8hly31xKli0',
        description: 'Learn the fundamentals of algorithm analysis and Big O notation'
      },
      {
        title: 'Arrays and String Manipulation',
        duration: '1h 15min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=CpZh4eF8QBw',
        description: 'Master array manipulation techniques and string algorithms'
      },
      {
        title: 'Hash Tables Deep Dive',
        duration: '1h 30min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=jalSiaIi8j4',
        description: 'Understanding hash tables and their implementations'
      },
      {
        title: 'Tree Traversal Algorithms',
        duration: '2h',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=fAAZixBzIAI',
        description: 'Learn different tree traversal techniques'
      }
    ],
    materials: [
      {
        title: 'DSA Handbook 2024',
        url: 'https://example.com/dsa-handbook.pdf',
        type: 'pdf',
        size: '15.2 MB'
      },
      {
        title: 'Algorithm Cheat Sheet',
        url: 'https://example.com/algo-cheatsheet.pdf',
        type: 'pdf',
        size: '2.1 MB'
      }
    ],
    videoResources: [
      {
        title: 'Advanced Sorting Algorithms',
        url: 'https://www.youtube.com/watch?v=Hoixgm4-P4M',
        type: 'video'
      },
      {
        title: 'Graph Algorithms Masterclass',
        url: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU',
        type: 'video'
      }
    ]
  },
  {
    id: '2',
    title: 'Cloud Architecture & DevOps',
    description: 'Comprehensive guide to modern cloud infrastructure, CI/CD, and deployment strategies',
    progress: 30,
    category: 'Infrastructure',
    icon: Cloud,
    duration: '35 hours',
    students: 12840,
    rating: 4.9,
    instructor: 'Alex Rivera',
    chapters: [
      {
        title: 'Cloud Computing Fundamentals',
        duration: '1h',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        description: 'Introduction to cloud computing concepts'
      },
      {
        title: 'AWS Core Services',
        duration: '2h',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=Z3SYDTMP3ME',
        description: 'Deep dive into AWS core services'
      }
    ],
    materials: [
      {
        title: 'DevOps Handbook',
        url: 'https://example.com/devops-handbook.pdf',
        type: 'pdf',
        size: '12.5 MB'
      }
    ],
    videoResources: [
      {
        title: 'Docker Deep Dive',
        url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
        type: 'video'
      }
    ]
  },
  {
    id: '3',
    title: 'AI/ML Engineering Fundamentals',
    description: 'Deep dive into machine learning algorithms, neural networks, and practical AI applications',
    progress: 0,
    category: 'Specialized Domains',
    icon: Brain,
    duration: '50 hours',
    students: 8920,
    rating: 4.7,
    instructor: 'Dr. Michael Zhang',
    chapters: [
      {
        title: 'Introduction to Machine Learning',
        duration: '1h 30min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=jGwO_UgTS7I',
        description: 'Basic concepts of machine learning'
      }
    ],
    materials: [
      {
        title: 'ML Fundamentals Guide',
        url: 'https://example.com/ml-guide.pdf',
        type: 'pdf',
        size: '18.3 MB'
      }
    ],
    videoResources: [
      {
        title: 'Neural Networks Explained',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
        type: 'video'
      }
    ]
  },
  {
    id: '4',
    title: 'Technical Leadership & Management',
    description: 'Essential leadership skills for tech leads, engineering managers, and CTOs',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 6340,
    rating: 4.9,
    instructor: 'Emma Thompson',
    chapters: [
      {
        title: 'Leadership Fundamentals',
        duration: '45 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=F8mF9TXj8dM',
        description: 'Core concepts of technical leadership'
      }
    ],
    materials: [
      {
        title: 'Tech Leadership Guide',
        url: 'https://example.com/leadership-guide.pdf',
        type: 'pdf',
        size: '8.7 MB'
      }
    ],
    videoResources: [
      {
        title: 'Team Management Strategies',
        url: 'https://www.youtube.com/watch?v=N7ZmPYaXoic',
        type: 'video'
      }
    ]
  }
];
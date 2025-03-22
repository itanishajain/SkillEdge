import { Code, Cloud, Brain, MessageSquare, PlayCircle } from 'lucide-react';

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
    title: 'Data Structures & Algorithms In C++',
    description: 'DSA Series for Placement Preparation in Making. Neither less nor more : Study only what is needed & Save Time.',
    progress: 65,
    category: 'Software Development',
    icon: Code,
    duration: '40 hours',
    students: 3897086,
    rating: 4.8,
    instructor: 'Apna College',
    chapters: [
      {
        title: 'Flowchart and Pseudocode',
        duration: '1h 25 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt',
        description: 'Learn the fundamentals of algorithm analysis : Flowchart and Pseudocode'
      },
      {
        title: 'Variables, Data Types and operators.',
        duration: '1h 16min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=Dxu7GKtdbnA&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=2',
        description: 'Master array manipulation techniques and string algorithms'
      },
      {
        title: 'Conditional Statements',
        duration: '1h 34min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=qR9U6bKxJ7g&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=3',
        description: 'Understanding hash tables and their implementations'
      },
      {
        title: 'Patterns',
        duration: '1h 31min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=rga_q2N7vU8&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=4',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Functions',
        duration: '49min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=P08Z_NC8GuY&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=5',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Binary NUmber System',
        duration: '37min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=xpy5NXiBFvA&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=6',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Bitwise Operators, Datatype modifiers.',
        duration: '38min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=r-u4uh3QvsQ&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=7',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Array data structure',
        duration: '54min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=8wmn7k1TTcI&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=8',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Vectors in C++',
        duration: '40min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=NWg38xWYzEg&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=9',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Kedanes Algorithm',
        duration: '23min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=P08Z_NC8GuY&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=5',
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
    title: 'Data Structures & Algorithms In Java',
    description: 'Get interview-ready with this course that has no prerequisites and is designed to make you an expert in solving easy to hard LeetCode problems with ease.',
    progress: 65,
    category: 'Software Development',
    icon: Code,
    duration: '40 hours',
    students: 18958610,
    rating: 4.8,
    instructor: 'Kunal Kushwaha',
    chapters: [
      {
        title: 'Base Data Structures and Algorithm',
        duration: '16 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=1',
        description: 'Learn the fundamentals of algorithm analysis : Flowchart and Pseudocode'
      },
      {
        title: 'Variables, Data Types and operators.',
        duration: '1h 16min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=Dxu7GKtdbnA&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=2',
        description: 'Master array manipulation techniques and string algorithms'
      },
      {
        title: 'Java vs C++ for Data Structures and Algorithms',
        duration: '11min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=Nckx9qMy_kw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2',
        description: 'Understanding hash tables and their implementations'
      },
      {
        title: 'Introduction to Java Architecture and Installation',
        duration: '28min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=4EP8YzcN0hQ&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=7',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'First Java Program : Input and Output',
        duration: '1h 32min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=TAtrPoaJ7gc&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=8',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Conditional and Loops',
        duration: '1h 2min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=ldYLYRNaucM&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=9',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Switch Statement and Nested Case in Java',
        duration: '26min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=mA23x39DjbI&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=10',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Functions/Methods in Java',
        duration: '1h 30min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=vvanI8NRlSI&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=11',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Introduction to Arrays and Array list in Java',
        duration: '1h 45min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=n60Dn0UsbEk&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=12',
        description: 'Learn different tree traversal techniques'
      },
      {
        title: 'Linear Search Algorithm ',
        duration: '1h 15min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=_HRA37X8N_Q&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=13',
        description: 'Learn different tree traversal techniques'
      }
      ,
      {
        title: 'Binary Search Algorithm ',
        duration: '58min',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=f6UU7V3szVw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=14',
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
    id: '3',
    title: 'C++ Tutorials',
    description: 'Complete C++ course covering basics to advanced concepts with practical examples and exercises',
    progress: 0,
    category: 'Programming Languages',
    icon: PlayCircle,
    duration: '30+ hours',
    students: 2500000,
    rating: 4.9,
    instructor: 'CodeWithHarry',
    chapters: [
      {
        title: 'Introduction to C++',
        duration: '21:50',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=j8nAHeVKL08',
        description: 'Introduction to C++ programming language and setup'
      },
      {
        title: 'Basic Structure of C++ Program',
        duration: '15:30',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=oW2r0r_i5Ps',
        description: 'Understanding the basic structure of a C++ program'
      },
      {
        title: 'Variables and Comments',
        duration: '17:24',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=jigb6W35zHE',
        description: 'Learn about variables and comments in C++'
      },
      {
        title: 'Variable Scope & Data Types',
        duration: '14:03',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=JrnQ-915czY',
        description: 'Understanding variable scope and different data types'
      },
      {
        title: 'Basic Input/Output',
        duration: '10:28',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=J05uoTbGOvQ',
        description: 'Learn about input/output operations in C++'
      },
      {
        title: 'Header Files & Operators',
        duration: '19:35',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=7D5A0BHjYhY',
        description: 'Understanding header files and operators in C++'
      },
      {
        title: 'Reference Variables & Typecasting',
        duration: '12:29',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=qvyGi6dZ4CI',
        description: 'Learn about reference variables and type conversion'
      },
      {
        title: 'Constants, Manipulators & Operator Precedence',
        duration: '16:44',
        completed: false,
        videoUrl: 'https://www.youtube.com/watch?v=i3a-G6Ebh9E',
        description: 'Understanding constants, manipulators and operator precedence'
      }
    ],
    materials: [
      {
        title: 'C++ Notes',
        url: 'https://www.codewithharry.com/videos/cpp-tutorials-in-hindi-1',
        type: 'link'
      }
    ],
    videoResources: [
      {
        title: 'Complete C++ Playlist',
        url: 'https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL',
        type: 'video'
      }
    ]
  },
  
  {
    id: '4',
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
    id: '5',
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
    id: '6',
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
  },
  {
    id: '7',
    title: 'Java with OOPs',
    description: 'Complete Object Oriented Programming (OOP) course in Java that will also help you ace your OOP interviews.',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 6340,
    rating: 4.9,
    instructor: 'Kunal Kushwaha',
    chapters: [
      {
        title: 'Introduction and concepts - classes, objects, constructors and keywords',
        duration: '1h 42min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=BSVKUk58K6U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=1',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Packages, Static , Singleton Class, In-built classes',
        duration: '1h 19min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=_Ya6CN13t8k&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=2',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Principle Insteritance, Polymorphism, Abstraction, Encapsulation',
        duration: '2h 12min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=46T2wD3IuhM&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=3',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Access control, In-built packages ad Object Classes',
        duration: '50min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=W145DXs8fFg&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=4',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Abstract Classes, Interfaces and Notations',
        duration: '1h 10min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=rgHZa7-Dibg&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=5',
        description: 'Core concepts of technical leadership'
      },{
        title: 'Generic, Custom Array list, Lambda Expression, Exception Handling, Object cloning',
        duration: '1h 31min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=OY2lPr8h93U&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=6',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Collection framework, Vector Class, Enums in Java',
        duration: '26min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=9ogGan-R1pc&list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&index=7',
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
  },
  {
    id: '8',
    title: 'Web Development',
    description: 'Learn Full Stack Development with MERN (MongoDB, Express, React, Node) and build web apps—subscribe now!',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 1400000,
    rating: 4.9,
    instructor: 'CodeHelp',
    chapters: [
      {
        title: 'Introduction',
        duration: '39min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=Vi9bxu-M-ag&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=1',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'writing your first HTML code',
        duration: '32min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=0gU-qrq3gjU&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=4',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'HTML tags',
        duration: '47min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=KdWPGqT5GwE&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=5',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Efficient Coding Technique with MERN Stack',
        duration: '42min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=e1X3WPoETsk&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=6',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'HTML Tables: Rows, Columns, and Advanced Attributes',
        duration: '39min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=VjCHupej12U&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=7',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Forms in HTML',
        duration: '56min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=dYrwawDa92U&list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=8',
        description: 'Core concepts of technical leadership'
      },
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
  },
  {
    id: '9',
    title: 'Python',
    description: 'Uploading a complete Python playlist covering basics to advanced topics, including hands-on coding examples, projects, and interview questions.',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 7692018,
    rating: 4.9,
    instructor: 'Apna College',
    chapters: [
      {
        title: 'Variables and Datatypes',
        duration: '45 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=t2_Q2BRzeEE&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=1',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Lists and Conditional Statements',
        duration: '55 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=lIId8IDP6TU&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=2',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'List and Tuple',
        duration: '41 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=qVyvmzFxF_o&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=3',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Dictionary and Sets',
        duration: '44 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=078tYSD7K8E&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=4',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Loops in python',
        duration: '1h 3min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=S73thl0AyFU&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=5',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Functiona and Recursion',
        duration: '1h 1min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=OvTH-7ESoRA&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=6',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'File Input/Output',
        duration: '50min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=jU0cndZziO0&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=7',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'OOPs in python (Part 1)',
        duration: '56min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=HeW-D6KpDwY&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=8',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'OOPs in python (Part 1)',
        duration: '1h 9min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=bAwmZVJeO5s&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&index=9',
        description: 'Core concepts of technical leadership'
      },
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
  },
  
  {
    id: '10',
    title: 'CyberSecurity',
    description: 'This playlist on will help you learn Cyber Security from scratch. You will get to know what is the role of Cyber Security in todays IT world and how different kind of attacks are taken care by Cyber Security.',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 1570553,
    rating: 4.9,
    instructor: 'Edureka',
    chapters: [
      {
        title: 'Introduction to CyberSecurity',
        duration: '19 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=ooJSgsB5fIE&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=3',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'CyberSecurity Certification and Career',
        duration: '16 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=eO8l70pdVhY&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=4',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'NIST CyberSecurity Framenwork',
        duration: '19 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=uk8-jJgu8-I&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=5',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'CyberSecurity Tutorial - Man In The Middle Attack',
        duration: '32 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=QtSB0Old_Q&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4&index=6',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'CyberSecurity Carrer Path',
        duration: '18 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=Sj4TD0LSC_k&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=9',
        description: 'Core concepts of technical leadership'
      },
      {
        title: '8 most common CyberSecurity Threats',
        duration: '22 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=Dk-ZqQ-bfy4&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=10',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'What is Cryptography',
        duration: '16 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=5jpgMXt1Z9Y&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&index=11',
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
  },
  {
    id: '11',
    title: 'Aptitude & Reasoning',
    description: 'Sure shot way to crack Quantitative Aptitude section in Placement tests, Job Interviews or Competitive exams. Learn each chapter in the easiest and most interesting way!',
    progress: 45,
    category: 'Soft Skills',
    icon: MessageSquare,
    duration: '25 hours',
    students: 11244368,
    rating: 4.9,
    instructor: 'CareerRide',
    chapters: [
      {
        title: 'Fractions and Decimals',
        duration: '46 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=1',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Shortcuts & Tricks',
        duration: '51 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=ZuMJFleXmiw&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=2',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Surds and Indices - Shortcuts & Tricks',
        duration: '47 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=jAbpPTpz2bQ&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=3',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Permutation and Combination',
        duration: '1h 11min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=ETiRE7N7pEI&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=4',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Probability',
        duration: '1h 7min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=ximxxERGSUc&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=5',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Mixture and Alligation',
        duration: '1h',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=OKSJDDAyqP0&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=6',
        description: 'Core concepts of technical leadership'
      },
      {
        title: 'Ratio and Proportion',
        duration: '58 min',
        completed: true,
        videoUrl: 'https://www.youtube.com/watch?v=jfoJBivWlnQ&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&index=7',
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
import { useState, useEffect } from 'react';
import { Job, JobFilter, SortOption, WorkMode, Hackathon, ViewMode } from '@/types/job';

// Simulated jobs data including Indian listings
const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp India',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    salary: {
      min: 2000000,
      max: 3500000,
      currency: 'INR'
    },
    description: 'Looking for an experienced frontend developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern frontend tooling'
    ],
    workMode: 'hybrid',
    experienceLevel: 'senior',
    postedDate: '2024-03-15',
    deadline: '2024-04-15',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    benefits: [
      'Health insurance',
      'Annual bonus',
      'Flexible work hours',
      'Learning allowance'
    ],
    featured: true,
    companyInfo: {
      size: '1000-5000',
      industry: 'Technology',
      website: 'https://techcorp.com'
    }
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Innovate Solutions',
    logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=100&h=100&fit=crop',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India'
    },
    salary: {
      min: 1800000,
      max: 3000000,
      currency: 'INR'
    },
    description: 'Join our dynamic team building next-gen web applications...',
    requirements: [
      '3+ years of full stack development',
      'Node.js and React expertise',
      'Database design experience'
    ],
    workMode: 'remote',
    experienceLevel: 'mid',
    postedDate: '2024-03-18',
    deadline: '2024-04-18',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
    benefits: [
      'Remote work',
      'Health coverage',
      'Stock options',
      'Professional development'
    ],
    featured: false,
    companyInfo: {
      size: '100-500',
      industry: 'Software',
      website: 'https://innovatesolutions.com'
    }
  }
];

const MOCK_HACKATHONS: Hackathon[] = [
  {
    id: '1',
    name: 'TechFest 2024',
    organizer: 'IIT Bombay',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop',
    description: 'Asia\'s largest science and technology festival',
    startDate: '2024-04-01',
    endDate: '2024-04-03',
    mode: 'Hybrid',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      venue: 'IIT Bombay Campus'
    },
    prizePool: 500000,
    currency: 'INR',
    participants: 1200,
    maxTeamSize: 4,
    techStack: ['AI/ML', 'Blockchain', 'IoT', 'Web3'],
    featured: true,
    eligibility: ['College students', 'Recent graduates'],
    timeline: {
      registration: {
        start: '2024-03-01',
        end: '2024-03-30'
      },
      rounds: [
        {
          name: 'Round 1',
          start: '2024-04-01',
          end: '2024-04-02',
          description: 'Initial prototype development'
        },
        {
          name: 'Finals',
          start: '2024-04-03',
          end: '2024-04-03',
          description: 'Final presentation and demo'
        }
      ]
    },
    sponsors: [
      {
        name: 'TechCorp',
        logo: 'https://example.com/techcorp.png',
        type: 'Title'
      }
    ],
    prizes: [
      {
        position: 'First',
        amount: 200000,
        currency: 'INR',
        description: 'Cash prize + Internship opportunity'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart India Hackathon',
    organizer: 'Government of India',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&fit=crop',
    description: 'World\'s biggest open innovation model hackathon',
    startDate: '2024-04-15',
    endDate: '2024-04-16',
    mode: 'Online',
    prizePool: 1000000,
    currency: 'INR',
    participants: 2000,
    maxTeamSize: 6,
    techStack: ['AI/ML', 'Mobile', 'Cybersecurity', 'Cloud'],
    featured: true,
    eligibility: ['College students'],
    timeline: {
      registration: {
        start: '2024-03-15',
        end: '2024-04-10'
      },
      rounds: [
        {
          name: 'Main Event',
          start: '2024-04-15',
          end: '2024-04-16',
          description: '36-hour hackathon'
        }
      ]
    },
    sponsors: [
      {
        name: 'Digital India',
        logo: 'https://example.com/digital-india.png',
        type: 'Title'
      }
    ],
    prizes: [
      {
        position: 'First',
        amount: 100000,
        currency: 'INR',
        description: 'Cash prize + Implementation opportunity'
      }
    ]
  }
];

export function useJobs(
  filter: JobFilter,
  sortBy: SortOption,
  search: string,
  workMode: WorkMode,
  country?: string,
  state?: string,
  viewMode: ViewMode = 'jobs'
) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (viewMode === 'jobs') {
          let filteredJobs = [...MOCK_JOBS];

          // Apply filters
          if (filter !== 'all') {
            if (filter === 'latest') {
              filteredJobs = filteredJobs.filter(job => 
                new Date(job.postedDate) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
              );
            } else if (filter === 'expired') {
              filteredJobs = filteredJobs.filter(job => 
                new Date(job.deadline) < new Date()
              );
            } else if (filter === 'featured') {
              filteredJobs = filteredJobs.filter(job => job.featured);
            }
          }

          // Apply work mode filter
          if (workMode !== 'all') {
            filteredJobs = filteredJobs.filter(job => job.workMode === workMode);
          }

          // Apply location filters
          if (country) {
            filteredJobs = filteredJobs.filter(job => 
              job.location.country.toLowerCase().includes(country.toLowerCase())
            );
          }
          if (state) {
            filteredJobs = filteredJobs.filter(job => 
              job.location.state.toLowerCase().includes(state.toLowerCase())
            );
          }

          // Apply search
          if (search) {
            const searchLower = search.toLowerCase();
            filteredJobs = filteredJobs.filter(job => 
              job.title.toLowerCase().includes(searchLower) ||
              job.company.toLowerCase().includes(searchLower) ||
              job.description.toLowerCase().includes(searchLower) ||
              job.skills.some(skill => skill.toLowerCase().includes(searchLower))
            );
          }

          // Apply sorting
          filteredJobs.sort((a, b) => {
            switch (sortBy) {
              case 'date':
                return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
              case 'salary':
                return b.salary.max - a.salary.max;
              case 'company':
                return a.company.localeCompare(b.company);
              case 'location':
                return `${a.location.country}${a.location.city}`.localeCompare(
                  `${b.location.country}${b.location.city}`
                );
              case 'deadline':
                return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
              default:
                return 0;
            }
          });

          setJobs(filteredJobs);
        } else {
          let filteredHackathons = [...MOCK_HACKATHONS];

          // Apply filters for hackathons
          if (filter !== 'all') {
            if (filter === 'latest') {
              filteredHackathons = filteredHackathons.filter(hackathon => 
                new Date(hackathon.startDate) > new Date()
              );
            } else if (filter === 'featured') {
              filteredHackathons = filteredHackathons.filter(hackathon => hackathon.featured);
            }
          }

          // Apply location filters
          if (country && state) {
            filteredHackathons = filteredHackathons.filter(hackathon => 
              hackathon.location?.country.toLowerCase().includes(country.toLowerCase()) &&
              hackathon.location?.state.toLowerCase().includes(state.toLowerCase())
            );
          }

          // Apply search
          if (search) {
            const searchLower = search.toLowerCase();
            filteredHackathons = filteredHackathons.filter(hackathon => 
              hackathon.name.toLowerCase().includes(searchLower) ||
              hackathon.organizer.toLowerCase().includes(searchLower) ||
              hackathon.description.toLowerCase().includes(searchLower) ||
              hackathon.techStack.some(tech => tech.toLowerCase().includes(searchLower))
            );
          }

          // Apply sorting
          filteredHackathons.sort((a, b) => {
            switch (sortBy) {
              case 'date':
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              case 'prize':
                return b.prizePool - a.prizePool;
              case 'participants':
                return b.participants - a.participants;
              case 'duration': {
                const aDuration = new Date(a.endDate).getTime() - new Date(a.startDate).getTime();
                const bDuration = new Date(b.endDate).getTime() - new Date(b.startDate).getTime();
                return bDuration - aDuration;
              }
              default:
                return 0;
            }
          });

          setHackathons(filteredHackathons);
        }

        setError(null);
      } catch {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter, sortBy, search, workMode, country, state, viewMode]);

  return { jobs, hackathons, loading, error };
}
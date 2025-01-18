export type JobFilter = 'all' | 'latest' | 'expired' | 'hackathon' | 'featured';
export type SortOption = 'date' | 'salary' | 'company' | 'location' | 'deadline' | 'prize' | 'participants' | 'duration';
export type WorkMode = 'all' | 'remote' | 'hybrid' | 'on-site';
export type ExperienceLevel = 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
export type ViewMode = 'jobs' | 'hackathons';

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  workMode: Exclude<WorkMode, 'all'>;
  experienceLevel: ExperienceLevel;
  postedDate: string;
  deadline: string;
  skills: string[];
  benefits: string[];
  featured: boolean;
  companyInfo: {
    size: string;
    industry: string;
    website: string;
  };
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  location?: {
    city: string;
    state: string;
    country: string;
    venue?: string;
  };
  prizePool: number;
  currency: string;
  participants: number;
  maxTeamSize: number;
  techStack: string[];
  featured: boolean;
  eligibility: string[];
  timeline: {
    registration: {
      start: string;
      end: string;
    };
    rounds: Array<{
      name: string;
      start: string;
      end: string;
      description: string;
    }>;
  };
  sponsors: Array<{
    name: string;
    logo: string;
    type: 'Title' | 'Gold' | 'Silver' | 'Bronze';
  }>;
  prizes: Array<{
    position: string;
    amount: number;
    currency: string;
    description: string;
  }>;
}
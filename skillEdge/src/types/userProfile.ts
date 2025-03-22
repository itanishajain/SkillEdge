export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedDate: string;
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  date: string;
}

export interface Contribution {
  date: string;
  count: number;
}

export interface SocialLinks {
  github: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

export interface UserProfile {
  username: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLinks;
  badges: Badge[];
  recentActivity: Activity[];
  contributions: Contribution[];
}
export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string; // lucide-react icon name
  username?: string;
  description?: string;
  stats?: string;
  available: boolean; // false = placeholder, hidden stats shown as "Add your profile"
  /** Official brand color, used subtly (e.g. a small accent dot), never as a loud fill. */
  brandColor?: string;
}

export interface Skill {
  name: string;
  icon: string;
  iconKind: 'lucide' | 'tech';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  location?: string;
  duration: string;
  type: 'internship' | 'leadership' | 'education';
  points: string[];
  technologies?: string[];
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: string[];
  challenges: { title: string; description: string }[];
  futureScope: string[];
  lessonsLearned: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  duration: string;
  featured: boolean;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  detail: ProjectDetail;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  /** Path to a certificate preview image, once the user uploads one. */
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  category: 'competition' | 'leadership' | 'award';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

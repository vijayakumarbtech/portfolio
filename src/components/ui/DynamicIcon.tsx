import {
  Code2,
  Globe,
  BrainCircuit,
  ShieldCheck,
  Wrench,
  Layers,
  Trophy,
  ChefHat,
  Terminal,
  Mail,
  FileText,
  ArrowDownToLine,
  FolderGit2,
  Download,
  Circle,
  Coffee,
  Cpu,
  Server,
  Network,
  MessageSquareText,
  Target,
  KeyRound,
  TestTube2,
  GitBranch,
  AppWindow,
  PenTool,
  ListTree,
  Boxes,
  MonitorCog,
  Waypoints,
  Paintbrush,
  FileCode2,
  GraduationCap,
  Award,
  Briefcase,
  type LucideProps,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcon';

// Only icons actually referenced from data files / CMS-style content live
// here. This keeps the bundle small — add to this map as you add icons
// to portfolio.ts, rather than importing the whole icon library.
const iconMap = {
  Code2,
  Globe,
  BrainCircuit,
  ShieldCheck,
  Wrench,
  Layers,
  Trophy,
  ChefHat,
  Terminal,
  Mail,
  FileText,
  ArrowDownToLine,
  FolderGit2,
  Download,
  Coffee,
  Cpu,
  Server,
  Network,
  MessageSquareText,
  Target,
  KeyRound,
  TestTube2,
  GitBranch,
  AppWindow,
  PenTool,
  ListTree,
  Boxes,
  MonitorCog,
  Waypoints,
  Paintbrush,
  FileCode2,
  GraduationCap,
  Award,
  Briefcase,
};

type IconName = keyof typeof iconMap;

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, size, className }: DynamicIconProps) {
  if (name === 'Github') return <GithubIcon size={typeof size === 'number' ? size : 16} className={className} />;
  if (name === 'Linkedin') return <LinkedinIcon size={typeof size === 'number' ? size : 16} className={className} />;

  const IconComponent = iconMap[name as IconName];
  if (!IconComponent) return <Circle size={size} className={className} />;
  return <IconComponent size={size} className={className} />;
}

/**
 * ────────────────────────────────────────────────────────────────
 * PORTFOLIO DATA — single source of truth
 * ────────────────────────────────────────────────────────────────
 * Edit THIS FILE to update the entire site. No component below
 * this layer should ever contain hardcoded personal content.
 *
 * Sections marked "TODO" are placeholders left intentionally
 * blank/neutral rather than filled with invented numbers — fill
 * them in with your real details before you publish.
 * ────────────────────────────────────────────────────────────────
 */

import type {
  SocialLink,
  SkillCategory,
  StatItem,
  TimelineEntry,
  Project,
  Certification,
  Achievement,
  Testimonial,
} from '../types';

export const personal = {
  name: 'Vijayakumar R',
  initials: 'VR',
  title: 'Full-Stack Software Engineer',
  tagline: 'MERN Stack · Applied ML · Security-Minded',
  status: 'Open to Software Engineer Roles',
  email: 'vijayakumarinrit@gmail.com',
  phone: '+91 95853 87555',
  githubUsername: 'vijayakumarbtech',
  // TODO: add your city/state if you'd like it shown publicly
  location: 'Tamil Nadu, India',
  profileImage: '/profile.png',
  resumePath: '/Vijayakumar_R_Resume.pdf',
  resumeLastUpdated: '2026-07-20',
  heroIntro:
    "I build full-stack products end to end, and hold the parts you don't see — data models, API design — to the same standard as the interface. Most recently, I brought that to a front-end internship at Jupiter Brothers, turning UI/UX designs into interfaces that held up in production.",
  aboutParagraphs: [
    "I'm a final-year Information Technology student at Ramco Institute of Technology, and I spend most of my time somewhere between the browser and the database — comfortable moving up and down the stack rather than staying in one layer.",
    'My approach to building something starts with the data model, not the UI. On the journal management platform I built, the interface came together quickly once the structure for journals, issues, and archives was right — the admin dashboard that followed was mostly a matter of exposing what the data already supported.',
    "The deepfake detector pushed me to work at a different layer: instead of designing an interface, I was tuning a classification pipeline where 'correct' wasn't binary — every threshold traded false positives against missed detections. That taught me to be precise about what I was actually optimizing for, not just whether the model ran.",
    "As President of the RIT Unstop Igniters Club, I plan and run events with a rotating team of student volunteers — which means giving people clear ownership of a piece of the work and being available when something goes wrong, rather than doing it all myself. It's the same instinct I bring to a codebase: clear scope, clear owner, check in before it's a fire.",
    "I'm looking for a software engineering role where I can keep working across the stack, learn from engineers who catch the details I don't yet know to ask about, and build things that hold up once real users are on them.",
  ],
  areasOfInterest: ['Full-Stack Web Development', 'Machine Learning', 'Cybersecurity & Cryptography', 'Software Testing & QA'],
  coreStrengths: [
    { title: 'End-to-End Ownership', desc: 'Comfortable owning a feature from UI to database schema to deployment.' },
    { title: 'Analytical Problem-Solving', desc: 'Breaks ambiguous problems into testable, buildable pieces.' },
    { title: 'Team Leadership', desc: 'Leads cross-functional student teams as club president — plans, delegates, delivers.' },
    { title: 'Security-Minded', desc: 'Certified in cybersecurity and cryptography; builds with a security-first mindset.' },
  ],
  softSkills: [
    'Leadership',
    'Communication',
    'Event & Team Coordination',
    'Adaptability',
    'Attention to Detail',
    'Time Management',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Coding Profiles', href: '#coding-profiles' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

// Hero stat strip — grounded in verifiable facts, not vanity metrics.
const currentYear = new Date().getFullYear();
export const heroStats: StatItem[] = [
  { id: 'learning', label: 'Years Learning to Code', value: Math.max(currentYear - 2022, 1), suffix: '+', icon: 'GraduationCap' },
  { id: 'projects', label: 'Projects Shipped', value: 2, icon: 'FolderGit2' },
  { id: 'internships', label: 'Internship', value: 1, icon: 'Briefcase' },
  { id: 'certs', label: 'Certifications', value: 3, icon: 'Award' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', icon: 'python', iconKind: 'tech' },
      { name: 'Java', icon: 'Coffee', iconKind: 'lucide' },
      { name: 'C', icon: 'Cpu', iconKind: 'lucide' },
      { name: 'SQL', icon: 'Database', iconKind: 'lucide' },
      { name: 'JavaScript', icon: 'javascript', iconKind: 'tech' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development (MERN)',
    icon: 'Globe',
    skills: [
      { name: 'React.js', icon: 'react', iconKind: 'tech' },
      { name: 'Node.js', icon: 'nodejs', iconKind: 'tech' },
      { name: 'Express.js', icon: 'Server', iconKind: 'lucide' },
      { name: 'MongoDB', icon: 'mongodb', iconKind: 'tech' },
      { name: 'HTML5', icon: 'FileCode2', iconKind: 'lucide' },
      { name: 'CSS3', icon: 'Paintbrush', iconKind: 'lucide' },
    ],
  },
  {
    id: 'ml',
    title: 'Artificial Intelligence',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning', icon: 'BrainCircuit', iconKind: 'lucide' },
      { name: 'Deep Learning', icon: 'Network', iconKind: 'lucide' },
      { name: 'NLP', icon: 'MessageSquareText', iconKind: 'lucide' },
      { name: 'Model Classification', icon: 'Target', iconKind: 'lucide' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Testing',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Cybersecurity', icon: 'ShieldCheck', iconKind: 'lucide' },
      { name: 'Cryptography & Network Security', icon: 'KeyRound', iconKind: 'lucide' },
      { name: 'Software Testing', icon: 'TestTube2', iconKind: 'lucide' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'GitBranch', iconKind: 'lucide' },
      { name: 'GitHub', icon: 'github', iconKind: 'tech' },
      { name: 'VS Code', icon: 'AppWindow', iconKind: 'lucide' },
      { name: 'UI/UX Design', icon: 'PenTool', iconKind: 'lucide' },
    ],
  },
  {
    id: 'cs',
    title: 'CS Foundations',
    icon: 'Layers',
    skills: [
      { name: 'Data Structures & Algorithms', icon: 'ListTree', iconKind: 'lucide' },
      { name: 'OOP', icon: 'Boxes', iconKind: 'lucide' },
      { name: 'DBMS', icon: 'Database', iconKind: 'lucide' },
      { name: 'Operating Systems', icon: 'MonitorCog', iconKind: 'lucide' },
      { name: 'Computer Networks', icon: 'Waypoints', iconKind: 'lucide' },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: 'edu-ramco',
    role: 'B.Tech, Information Technology',
    organization: 'Ramco Institute of Technology',
    duration: '2023 — 2027 (Expected)',
    type: 'education',
    points: [
      'CGPA: 8.04 / 10.0',
      'Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP',
    ],
  },
  {
    id: 'exp-jupiter',
    role: 'Front-End Developer Intern',
    organization: 'Jupiter Brothers Pvt. Ltd.',
    duration: 'Jul 2025 — Aug 2025',
    type: 'internship',
    points: [
      'Converted UI/UX designs into responsive, functional web interfaces, ensuring consistent usability across devices.',
      'Partnered closely with the design team to achieve pixel-perfect implementation of interface components.',
      'Improved front-end performance and overall user experience by applying modern web development practices.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    id: 'lead-unstop',
    role: 'President',
    organization: 'RIT Unstop Igniters Club',
    duration: 'Current',
    type: 'leadership',
    points: [
      'Lead and manage a range of technical and non-technical campus events from planning through execution.',
      'Coordinate cross-functional student teams, driving increased engagement and participation.',
      'Own end-to-end decision-making for club initiatives and event operations.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'deepfake-detector',
    slug: 'deepfake-detector',
    title: 'AI-Based Deepfake Image & Video Detector',
    category: 'Machine Learning',
    tagline: 'Detecting manipulated media with deep learning and NLP.',
    description:
      'A machine learning system that combines NLP and deep learning techniques to identify AI-manipulated images and deepfake videos, trained to classify visual content as authentic or manipulated.',
    role: 'Machine Learning Developer',
    duration: 'Academic Project',
    featured: true,
    // NOTE: exact libraries/frameworks not specified in source resume —
    // update with your precise stack (e.g. TensorFlow/PyTorch/OpenCV) before publishing.
    techStack: ['Python', 'Deep Learning', 'Convolutional Neural Networks', 'NLP', 'Computer Vision'],
    features: [
      'Classification pipeline for detecting manipulated images and deepfake video frames',
      'Combined NLP and deep learning techniques to strengthen detection accuracy',
      'Designed with scalability in mind to support automated, large-scale content screening',
    ],
    githubUrl: 'https://github.com/vijayakumarbtech',
    image: '/project-deepfake.png',
    detail: {
      problem:
        'Deepfake media and AI-manipulated images are increasingly difficult to distinguish from authentic content, accelerating the spread of misinformation and eroding trust in visual media.',
      solution:
        'Built a classification system that combines deep learning-based visual analysis with NLP techniques to flag manipulated images and videos, aiming to make detection accurate enough for automated, scalable screening.',
      architecture: [
        'Data ingestion and preprocessing pipeline for image and video frame extraction',
        'Deep learning classification models trained to distinguish authentic vs. manipulated content',
        'NLP-assisted analysis layer to strengthen classification signal',
        'Evaluation pipeline for measuring model accuracy on manipulated content',
      ],
      challenges: [
        {
          title: 'Distinguishing subtle manipulations',
          description:
            'High-quality deepfakes introduce only subtle visual artifacts, requiring careful model tuning to avoid both false positives and missed detections.',
        },
        {
          title: 'Generalizing across content types',
          description: 'Building a classifier robust enough to handle both static images and video frame sequences.',
        },
      ],
      futureScope: [
        'Expand training data to cover a wider range of deepfake generation techniques',
        'Add real-time video stream analysis',
        'Publish a lightweight API for third-party integration',
      ],
      lessonsLearned: [
        'How NLP and computer vision techniques can complement each other in a single detection pipeline',
        'The importance of diverse, representative training data when building classifiers for adversarial content',
      ],
    },
  },
  {
    id: 'journal-management',
    slug: 'journal-management',
    title: 'Journal Management Website',
    category: 'Full-Stack Development',
    tagline: 'End-to-end publishing workflows for academic journals.',
    description:
      'A full-stack platform that manages the complete paper submission and publication workflow for academic journals, with an admin dashboard for centralized content management.',
    role: 'Full-Stack Developer',
    duration: 'Academic Project',
    featured: true,
    // NOTE: MERN stack inferred from your listed specialization — confirm exact
    // libraries/services used before publishing.
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'End-to-end paper submission and publication workflow management',
      'Automated issue publishing and archive management',
      'Admin dashboard for centralized control of journals, issues, archives, and site content',
    ],
    githubUrl: 'https://github.com/vijayakumarbtech',
    image: '/project-journal.svg',
    detail: {
      problem:
        'Academic journals typically manage submissions, reviews, and issue publishing through manual, fragmented processes that are slow to update and hard to maintain.',
      solution:
        'Designed and built a full-stack web platform that centralizes the entire journal lifecycle — from paper submission to issue publication — behind a single admin dashboard.',
      architecture: [
        'React front end for public journal browsing and submission flows',
        'Node.js / Express REST API handling submissions, issues, and archive data',
        'MongoDB for storing journals, issues, articles, and site content',
        'Admin dashboard for centralized content and workflow management',
      ],
      challenges: [
        {
          title: 'Modeling dynamic content',
          description:
            'Structuring journals, issues, and archives so that non-technical admins can publish new content without code changes.',
        },
        {
          title: 'Automating publication workflows',
          description:
            'Replacing manual issue publishing with an automated flow while keeping the archive consistent and browsable.',
        },
      ],
      futureScope: [
        'Add role-based access for reviewers and editors',
        'Introduce automated email notifications for submission status',
        'Add analytics for submission and publication trends',
      ],
      lessonsLearned: [
        'How to design a data model flexible enough to support recurring publication cycles',
        'The value of a well-scoped admin dashboard in reducing operational overhead for non-technical users',
      ],
    },
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity and Privacy',
    issuer: 'NPTEL, IIT Madras',
    // TODO: add issue date + credential ID / verify link, and a preview
    // image at e.g. /certificates/cybersecurity.jpg once you have one —
    // the card shows a clean placeholder until then.
    issueDate: 'NOV 2024',
    image: 'c1.png',
  },
  {
    id: 'cert-crypto',
    title: 'Cryptography and Network Security',
    issuer: 'NPTEL, IIT Kharagpur',
    issueDate: 'MAY 2025',
    image: 'c2.png',
  },
  {
    id: 'cert-testing',
    title: 'Software Testing',
    issuer: 'NPTEL, International Institute of Information Technology, Bangalore',
    issueDate: 'NOV 2025',
    image: 'c3.png',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-best-manager-kcet',
    title: '"Best Manager" — Kamaraj College of Engineering and Technology',
    description: 'Won the Best Manager title at an inter-collegiate event, recognized for event planning and coordination.',
    category: 'award',
  },
  {
    id: 'ach-best-manager-nec',
    title: '"Best Manager" — National Engineering College',
    description: 'Won the Best Manager title at an inter-collegiate event, recognized for leadership and decision-making.',
    category: 'award',
  },
  {
    id: 'ach-best-manager-msec',
    title: '"Best Manager" — Mepco Schlenk Engineering College',
    description: 'Won the Best Manager title at an inter-collegiate event, demonstrating consistent cross-event leadership.',
    category: 'award',
  },
];

// Coding profiles — only GitHub & LinkedIn are confirmed; the rest are
// scaffolded as "connect" cards. Fill in `url` and flip `available: true`
// once you have a live profile to link.
export const codingProfiles: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/vijayakumarbtech',
    icon: 'Github',
    username: '@vijayakumarbtech',
    description: 'Source code, commit history, and shipped projects.',
    available: true,
    brandColor: '#24292F',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/vijayakumar2006',
    icon: 'Linkedin',
    username: 'vijayakumar2006',
    description: 'Professional network, updates, and experience.',
    available: true,
    brandColor: '#0A66C2',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    url: 'https://leetcode.com/u/vijayakumar18/',
    icon: 'Code2',
    username: 'vijayakumar18',
    description: 'Consistency and interest towards problem solving Approach.',
    available: true,
    brandColor: '#FFA116',
  },
 
];

// LeetCode username used to render a live stats embed (leetcard.jacoblin.cool).
// Leave blank to show a friendly "connect your profile" placeholder instead.
export const leetcodeUsername = 'https://leetcode.com/u/vijayakumar18/';

// Testimonials — intentionally empty. Populate with real quotes from people
// who can vouch for your work; the section hides itself until you do.
export const testimonials: Testimonial[] = [];

export const socialFooterLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/vijayakumarbtech', icon: 'Github', available: true },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/vijayakumar2006', icon: 'Linkedin', available: true },
  { id: 'email', label: 'Email', url: 'mailto:vijayakumarinrit@gmail.com', icon: 'Mail', available: true },
];

export const seo = {
  siteUrl: 'https://vijayakumarr.dev',
  defaultTitle: 'Vijayakumar R — Full-Stack Software Engineer',
  defaultDescription:
    'Portfolio of Vijayakumar R, a full-stack (MERN) software engineer specializing in scalable web applications, machine learning, and secure systems.',
};

// EmailJS config — create a free account at emailjs.com, then fill these in.
// Until configured, the contact form falls back to a mailto: link.
export const emailjsConfig = {
  serviceId: 'service_ic0bp18', // e.g. 'service_xxxxxxx'
  templateId: 'template_m2r10rr', // e.g. 'template_xxxxxxx'
  publicKey: 'jlPGBuMBnNRczqMe4', // e.g. 'xxxxxxxxxxxxxxxxx'
};

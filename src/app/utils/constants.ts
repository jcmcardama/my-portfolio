import type { CareerItem, EducationItem, FooterItem, FormState, NavItem, Project, SkillCategory } from "../types/types";
import CodeIcon              from '@mui/icons-material/Code';
import StorageIcon           from '@mui/icons-material/Storage';
import BuildOutlinedIcon     from '@mui/icons-material/BuildOutlined';
import BrushOutlinedIcon     from '@mui/icons-material/BrushOutlined';
import JavascriptIcon        from '@mui/icons-material/Javascript';
import DataObjectIcon        from '@mui/icons-material/DataObject';
import DnsIcon               from '@mui/icons-material/Dns';
import CloudIcon             from '@mui/icons-material/Cloud';
import TerminalIcon          from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EmailOutlinedIcon    from '@mui/icons-material/EmailOutlined';
import LinkedInIcon         from '@mui/icons-material/LinkedIn';
import GitHubIcon           from '@mui/icons-material/GitHub';

// ===================================================================
// Theme Constants
// ===================================================================

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark'
};

// ===================================================================
// Nav Items Constants
// ===================================================================

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',     path: '/'         },
  { label: 'About',    path: '/about'    },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills'   },
  { label: 'Contact',  path: '/contact'  }
];

// ===================================================================
// Footer Constants
// ===================================================================

export const FOOTER_ITEMS: FooterItem[] = [
    { label: 'GitHub',   href: 'https://github.com/yourusername'},
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername'},
    { label: 'Email',    href: 'mailto:you@example.com'}
];

export const year = 2026;

// ===================================================================
// Home Page Constants
// ===================================================================

export const TAGS = ['React', 'TypeScript', 'Node.js', 'AWS', 'UI/UX'];

export const HOME_TEXTS = {
  OVERLINE: 'Available for opportunities',
  NAME: 'Jan Carlo M. Cardama',
  TITLE: 'Full-Stack Software Engineer',
  TAGLINE: '"Building products that are fast, accessible, and a joy to use."',
  SUMMARY: 'A software engineer with 5+ years of experience turning complex problems into elegant, scalable solutions. I thrive at the intersection of great engineering and thoughtful design — shipping products that users love and teams are proud of.',
  BUTTON: {
    VIEW_WORK: 'View My Work',
    CONTACT: 'Get in Touch'
  }
};

// ===================================================================
// About Page Constants
// ===================================================================

export const CAREER: CareerItem[] = [
  {
    company:  'Acme Corp',
    role:     'Senior Frontend Engineer',
    duration: '2022 – Present',
    bullets:  [
      'Led rebuild of core product dashboard, reducing load time by 40%.',
      'Mentored 3 junior engineers and established frontend code standards.',
      'Collaborated cross-functionally with design and product teams.',
    ]
  },
  {
    company:  'Tech Startup Inc.',
    role:     'Full-Stack Developer',
    duration: '2020 – 2022',
    bullets:  [
      'Built and maintained RESTful APIs serving 50k+ daily active users.',
      'Introduced TypeScript across the frontend codebase, reducing bugs by 30%.',
    ]
  },
  {
    company:  'Freelance',
    role:     'Web Developer',
    duration: '2018 – 2020',
    bullets:  [
      'Delivered 15+ client projects spanning e-commerce, portfolio, and SaaS.',
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'State University',
    year:   '2018'
  },
  {
    degree: 'AWS Certified Solutions Architect',
    school: 'Amazon Web Services',
    year:   '2021'
  }
];

export const ABOUT_TEXTS = {
  OVERLINE: 'About Me',
  TITLE: 'The person behind the code.',
  DESCRIPTION1: `Hi, I'm ${HOME_TEXTS.NAME} — a full-stack engineer based in the Philippines. I'm passionate about building products that are not only technically sound but also genuinely delightful to use. I care deeply about performance, accessibility, and developer experience.`,
  DESCRIPTION2: `Outside of work you'll find me contributing to open-source, reading about systems design, or exploring new hiking trails. I'm currently open to senior engineering and tech-lead roles at product-focused companies.`,
  CAREER: 'Career',
  EDUCATION: 'Education & Certifications'
};

// ===================================================================
// Projects Page Constants
// ===================================================================

export const PROJECTS: Project[] = [
  {
    title: 'DevFlow — Project Management SaaS',
    category: 'Full-Stack',
    description:
      'A real-time Kanban board built for distributed engineering teams. Features drag-and-drop, ' +
      'role-based access control, GitHub PR integration, and Slack notifications.',
    tags:      ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
    githubUrl: 'https://github.com/yourusername/devflow',
    liveUrl:   'https://devflow-demo.vercel.app'
  },
  {
    title: 'Luminary — E-Commerce Platform',
    category: 'Full-Stack',
    description:
      'A performant, SEO-friendly e-commerce storefront with Stripe payments, inventory management, ' +
      'and a headless CMS for content editing without deployments.',
    tags:      ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/luminary',
    liveUrl:   'https://luminary-store.vercel.app'
  },
  {
    title: 'Pulse — Real-Time Analytics Dashboard',
    category: 'Frontend',
    description:
      'A data-visualization dashboard that ingests live event streams and renders interactive charts ' +
      'with sub-second latency. Optimized for readability across large datasets.',
    tags:      ['React', 'D3.js', 'WebSockets', 'Redis', 'AWS Lambda', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/pulse',
    liveUrl:   'https://pulse-analytics.vercel.app'
  }
];

export const PROJECTS_TEXTS = {
  OVERLINE: 'Selected Work',
  TITLE: 'Projects.',
  DESCRIPTION: 'A curated selection of projects that represent the depth and breadth of my engineering work.',
  BUTTON: {
    SOURCE: 'Source',
    LIVE: 'Live Demo'
  }
};

// ===================================================================
// Skills Page Constants
// ===================================================================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category:    'Frontend',
    icon:        CodeIcon,
    description: 'Building rich, accessible, and performant user interfaces.',
    skills: [
      { name: 'React / Next.js',   icon: JavascriptIcon },
      { name: 'TypeScript',        icon: DataObjectIcon },
      { name: 'MUI / Tailwind CSS',icon: BrushOutlinedIcon },
      { name: 'Testing (Jest / RTL)',icon: IntegrationInstructionsIcon },
      { name: 'GraphQL (Client)',  icon: DataObjectIcon }
    ],
  },
  {
    category:    'Backend',
    icon:        StorageIcon,
    description: 'Designing reliable APIs and scalable server-side architecture.',
    skills: [
      { name: 'Node.js / Express', icon: TerminalIcon },
      { name: 'PostgreSQL',        icon: StorageIcon },
      { name: 'Redis',             icon: DnsIcon },
      { name: 'REST & GraphQL',    icon: DataObjectIcon },
      { name: 'Prisma / Drizzle',  icon: StorageIcon }
    ],
  },
  {
    category:    'DevOps & Tools',
    icon:        BuildOutlinedIcon,
    description: 'Shipping and maintaining production systems with confidence.',
    skills: [
      { name: 'Docker',          icon: CloudIcon },
      { name: 'AWS (EC2/S3/Lambda)', icon: CloudIcon },
      { name: 'CI/CD (GitHub Actions)', icon: IntegrationInstructionsIcon },
      { name: 'Vercel / Netlify',icon: CloudIcon },
      { name: 'Git & GitHub',    icon: TerminalIcon }
    ],
  }
];

export const SKILLS_TEXT = {
  OVERLINE: 'Expertise',
  TITLE: 'Skills.',
  DESCRIPTION: 'Technologies and tools I work with professionally. Dots indicate depth of experience.'
};

// ===================================================================
// Contact Page Constants
// ===================================================================

export const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

export const CONTACT_LINKS = [
  {
    icon:  EmailOutlinedIcon,
    label: 'jcmcardama@gmail.com',
    href:  'mailto:jcmcardama@gmail.com',
  },
  {
    icon:  LinkedInIcon,
    label: 'linkedin.com/in/jan-carlo-cardama',
    href:  'https://www.linkedin.com/in/jan-carlo-cardama',
  },
  {
    icon:  GitHubIcon,
    label: 'github.com/jcmcardama',
    href:  'https://github.com/jcmcardama',
  },
];

export const CONTACT_TEXT = {
  OVERLINE: "Let's Talk",
  TITLE: 'Get in Touch.',
  DESCRIPTION: "I'm currently open to senior engineering roles and interesting freelance work. Drop me a message and I'll get back to you within 24 hours.",
  CONTACT_SECTION: {
    HEADER: "Contact Info",
    BODY: "Reach out through any of these channels.",
    BTN_TEXT: "Download Resume"
  },
  FORM_SECTION: {
    NAME: "Full Name",
    EMAIL: "Email Address",
    SUBJECT: "Subject",
    MESSAGE: "Message",
    BTN_TEXT: "Submit"
  },
  ERROR_MESSAGE: {
    NAME_REQUIRED: "Name is required.",
    EMAIL_REQUIRED: "Email is required.",
    INVALID_EMAIL: "Enter a valid email address.",
    SUBJECT_REQUIRED: "Subject is required.",
    MESSAGE_LENGTH: "Message must be at least 20 characters."
  },
  ALERT_MESSAGE: "Message sent! I'll be in touch shortly."
};
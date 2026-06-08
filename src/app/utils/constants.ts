import type { CareerItem, EducationItem, FooterItem, NavItem, Project } from "../types/types";

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
  BTN_VIEW_WORK: 'View My Work',
  BTN_CONTACT: 'Get in Touch'
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
    ],
  },
  {
    company:  'Tech Startup Inc.',
    role:     'Full-Stack Developer',
    duration: '2020 – 2022',
    bullets:  [
      'Built and maintained RESTful APIs serving 50k+ daily active users.',
      'Introduced TypeScript across the frontend codebase, reducing bugs by 30%.',
    ],
  },
  {
    company:  'Freelance',
    role:     'Web Developer',
    duration: '2018 – 2020',
    bullets:  [
      'Delivered 15+ client projects spanning e-commerce, portfolio, and SaaS.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'State University',
    year:   '2018',
  },
  {
    degree: 'AWS Certified Solutions Architect',
    school: 'Amazon Web Services',
    year:   '2021',
  },
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
    liveUrl:   'https://devflow-demo.vercel.app',
  },
  {
    title: 'Luminary — E-Commerce Platform',
    category: 'Full-Stack',
    description:
      'A performant, SEO-friendly e-commerce storefront with Stripe payments, inventory management, ' +
      'and a headless CMS for content editing without deployments.',
    tags:      ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/luminary',
    liveUrl:   'https://luminary-store.vercel.app',
  },
  {
    title: 'Pulse — Real-Time Analytics Dashboard',
    category: 'Frontend',
    description:
      'A data-visualization dashboard that ingests live event streams and renders interactive charts ' +
      'with sub-second latency. Optimized for readability across large datasets.',
    tags:      ['React', 'D3.js', 'WebSockets', 'Redis', 'AWS Lambda', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/pulse',
    liveUrl:   'https://pulse-analytics.vercel.app',
  },
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
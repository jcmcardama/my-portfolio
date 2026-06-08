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

const CONTACT_LINK_HREF = {
  GITHUB: "https://github.com/jcmcardama",
  LINKEDIN: "https://www.linkedin.com/in/jan-carlo-cardama",
  EMAIL: "mailto:jcmcardama@gmail.com"
}

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
    { label: 'GitHub',   href: CONTACT_LINK_HREF.GITHUB},
    { label: 'LinkedIn', href: CONTACT_LINK_HREF.LINKEDIN},
    { label: 'Email',    href: CONTACT_LINK_HREF.EMAIL}
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
    company:  'HCL Technologies Ltd - Philippine Branch',
    role:     'Software Engineer II',
    duration: 'Nov 2022 – Present',
    bullets:  [
      'Led rebuild of core product dashboard, reducing load time by 40%.',
      'Mentored 3 junior engineers and established frontend code standards.',
      'Collaborated cross-functionally with design and product teams.',
    ]
  },
  {
    company:  'Start Virtual',
    role:     'Virtual Assistant',
    duration: 'May 2022 – Jun 2022',
    bullets:  [
      "Cold called about 200 and texted 1,000 potential sellers daily to check if they are interested in selling their house.",
      "Categorized the potential leads as a cold, warm or hot lead depending on my client's preference about the state of their properties."
    ]
  },
  {
    company:  'Concentrix',
    role:     'Sales II Advisor',
    duration: 'Jul 2019 – Jan 2022',
    bullets:  [
      "Achieved being one of the top performers for the most of 2021 and being the top agent of the LoB during the Q4 2021.",
      "Managed about 30 calls a day regarding customer’s concern with their vehicle or if they have concerns about GM’s dealerships all around the USA."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Full Stack Web Development',
    school: 'Avion School',
    year:   '2022'
  },
  {
    degree: 'Bachelor of Science in Electronics Communication Engineer (Undergraduate)',
    school: 'University of the Philippines - Diliman',
    year:   '2019'
  }
];

export const ABOUT_TEXTS = {
  OVERLINE: 'About Me',
  TITLE: 'The person behind the code.',
  DESCRIPTION: [
    "I’m a Software Engineer at HCL Technologies with hands-on experience building scalable and maintainable web applications.",

    "My foundation in full stack development was built through intensive training at Avion School, where I worked with HTML, CSS, JavaScript, ReactJS, Ruby on Rails, and Git/GitHub. Since joining HCL in November 2022, I’ve been working primarily with ReactJS, TypeScript, SCSS, Redux, NodeJS, and MUI, while also contributing to DevOps processes using Jenkins, Docker, and Docker Compose.",

    "I’m experienced in implementing CI/CD pipelines and collaborating in agile environments. I continuously explore modern development practices, including AI-assisted coding tools like GitHub Copilot and Windsurf, to work efficiently and have a high code quality.",

    "With a strong engineering foundation and a growth mindset, I’m passionate about building clean, reliable, and user-focused software.",
  ],
  CAREER: 'Career',
  EDUCATION: 'Education & Certifications'
};

// ===================================================================
// Projects Page Constants
// ===================================================================

export const PROJECTS: Project[] = [
  {
    title: 'My Portfolio',
    category: 'Frontend',
    description:
      'Think of description for Portfolio',
    tags:      ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
    githubUrl: 'https://github.com/jcmcardama/my-portfolio',
    liveUrl:   'https://devflow-demo.vercel.app'
  },
  {
    title: 'AIssistant',
    category: 'Full-Stack',
    description:
      'AI chatbot using Gemini',
    tags:      ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/luminary',
    liveUrl:   'https://luminary-store.vercel.app'
  },
  {
    title: 'Inventory Application',
    category: 'Frontend',
    description:
      'Adding To Dos, Managing Inventory',
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
    href:  CONTACT_LINK_HREF.EMAIL,
  },
  {
    icon:  LinkedInIcon,
    label: 'linkedin.com/in/jan-carlo-cardama',
    href:  CONTACT_LINK_HREF.LINKEDIN,
  },
  {
    icon:  GitHubIcon,
    label: 'github.com/jcmcardama',
    href:  CONTACT_LINK_HREF.GITHUB,
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
import type { CareerItem, EducationItem, FooterItem, FormState, NavItem, Project, SkillCategory } from "../types/types";
import CodeIcon              from '@mui/icons-material/Code';
import StorageIcon           from '@mui/icons-material/Storage';
import BuildOutlinedIcon     from '@mui/icons-material/BuildOutlined';
import BrushOutlinedIcon     from '@mui/icons-material/BrushOutlined';
import JavascriptIcon        from '@mui/icons-material/Javascript';
import DataObjectIcon        from '@mui/icons-material/DataObject';
import CloudIcon             from '@mui/icons-material/Cloud';
import TerminalIcon          from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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

export const TAGS = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma'];

export const HOME_TEXTS = {
  OVERLINE: 'Available for opportunities',
  NAME: 'Jan Carlo M. Cardama',
  TITLE: 'Full-Stack Software Engineer',
  TAGLINE: '"Engineering experiences that are fast, intuitive, and built to last."',
  SUMMARY: "I'm a Full-Stack Software Engineer who turns complex problems into clean, purposeful products. With a sharp eye for UI execution honed from Figma to production, and a solid command of the full stack from React and TypeScript on the frontend to Node.js and PostgreSQL on the backend, I bring both technical precision and user-first thinking to every project I touch. I'm currently open to new opportunities where I can keep building things that matter.",
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
      'Maintaining and enhancing enterprise-grade full-stack products — translating Figma designs into pixel-perfect React and TypeScript components with MUI, while managing robust PostgreSQL databases and Node.js backend services.',
      'Operating across a comprehensive technical ecosystem that includes automated unit and integration testing with Jest and React Testing Library, containerized development via Docker, and continuous delivery through Jenkins CI/CD pipelines deployed to AWS. ',
      "Using modern AI-assisted engineering tools — including GitHub Copilot and Windsurf — while actively utilizing and contributing to HCL's own open-source Enchanted Web Components framework to drive consistency and accelerate development across teams.",
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
    "My love for technology started long before I wrote my first line of code. At the Philippine Science High School, I was the kid who stayed curious about how things worked under the hood — and that curiosity only deepened at UP Diliman, where I got my first real taste of web technologies, databases, and systems programming. Life, however, had other plans. Financial realities pulled me away before I could finish my degree — but they never pulled me away from the craft.",
    "Rather than wait for the perfect circumstances, I adapted. I took a role as a Sales Advisor at Concentrix, handling 30+ calls a day for AT&T and General Motors accounts. What started as a detour became a masterclass. Without any prior experience, I became a Top Agent — sharpening my communication skills, learning to think fast under pressure, and developing a deep respect for the human being on the other end of every interaction. Those years forged a discipline and empathy that I carry into every product I build today.",
    "When the moment was right, I went all in. In January 2022, I enrolled at Avion School and dove headfirst into modern full-stack development — ReactJS, Ruby on Rails, Git, and Agile collaboration. That decision changed everything. I landed a role as a Software Engineer II at HCL Technologies, where I now build and maintain enterprise-grade products using ReactJS, TypeScript, Node.js, PostgreSQL, and a modern DevOps stack that includes Docker, Jenkins CI/CD, and AWS. My path wasn't linear — and I think that's exactly what makes me the kind of engineer who doesn't fold when things get hard, who figures it out, and who ships.",
  ],
  CAREER: 'Career',
  EDUCATION: 'Education & Certifications'
};

// ===================================================================
// Projects Page Constants
// ===================================================================

export const PROJECTS: Project[] = [
  {
    title: 'AucShoes',
    category: 'Full-Stack',
    description: 'A Ruby on Rails application that helps to bid and sell shoes online.',
    tags: ['Ruby', 'Rails', 'Bootsstrap', 'Font Awesome', 'PostgreSQL'],
    githubUrl: 'https://github.com/emerjohncy/final_project',
    liveUrl: '#',
    deployed: false
  },
  {
    title: 'Gen-a-README',
    category: 'Frontend',
    description: 'A React with TypeScript application that generates README for GitHub repositories.',
    tags:      ['React', 'Typescript', 'SCSS', 'MUI', 'Gemini', 'Vercel'],
    githubUrl: 'https://github.com/jcmcardama/readme-generator',
    liveUrl:   'https://gen-a-readme.vercel.app/',
    deployed: true
  },
  {
    title: 'Inventory Server Backend',
    category: 'Backend',
    description: 'A Node.js with Express API for managing and tracking inventory.',
    tags: ['NodeJs', 'Express', 'PostgresQL', 'Prisma', 'Render', 'Supabase'],
    githubUrl: 'https://github.com/jcmcardama/inventory-server-backend',
    liveUrl: 'https://inventory-server-backend.onrender.com/api-docs/',
    deployed: true
  }
];

export const PROJECTS_TEXTS = {
  OVERLINE: 'Selected Work',
  TITLE: 'Projects.',
  DESCRIPTION: 'A curated selection of projects that represent the depth and breadth of my engineering work.',
  BUTTON: {
    SOURCE: 'Source',
    LIVE: 'Live',
    PROGRESS: 'Upcoming'
  }
};

// ===================================================================
// Skills Page Constants
// ===================================================================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category:    'Frontend',
    icon:        CodeIcon,
    description: 'Building rich, responsive, and component-driven user interfaces.',
    skills: [
      { name: 'React / TypeScript',   icon: DataObjectIcon },
      { name: 'JavaScript / HTML / CSS', icon: JavascriptIcon },
      { name: 'MUI / SCSS',           icon: BrushOutlinedIcon },
      { name: 'Redux Toolkit',        icon: DataObjectIcon },
      { name: 'Testing (Jest / RTL)', icon: IntegrationInstructionsIcon }
    ],
  },
  {
    category:    'Backend',
    icon:        StorageIcon,
    description: 'Designing reliable APIs, data schemas, and server-side logic.',
    skills: [
      { name: 'Node.js',              icon: TerminalIcon },
      { name: 'Ruby on Rails',        icon: CodeIcon },
      { name: 'PostgreSQL / MySQL',   icon: StorageIcon },
      { name: 'REST (Postman / Swagger)', icon: DataObjectIcon },
      { name: 'C++ / Matlab / MIPS',  icon: TerminalIcon }
    ],
  },
  {
    category:    'DevOps & Tools',
    icon:        BuildOutlinedIcon,
    description: 'Shipping software securely with modern CI/CD pipelines and AI workflows.',
    skills: [
      { name: 'Docker',               icon: CloudIcon },
      { name: 'AWS',                  icon: CloudIcon },
      { name: 'CI/CD (Jenkins)',      icon: IntegrationInstructionsIcon },
      { name: 'Git & GitHub',         icon: TerminalIcon },
      { name: 'AI Coding (Windsurf / Copilot)', icon: AutoFixHighIcon }
    ],
  }
];

export const SKILLS_TEXT = {
  OVERLINE: 'Expertise',
  TITLE: 'Skills.',
  DESCRIPTION: 'Technologies and tools I work with professionally.'
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
    MESSAGE_LENGTH: "Message must be at least 20 characters.",
    ALERT_FAILED_MESSAGE: "An error occured. Please try again later."
  },
  ALERT_MESSAGE: "Message sent! I'll be in touch shortly."
};
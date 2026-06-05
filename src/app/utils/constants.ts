import type { FooterItem, NavItem } from "../types/types";

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
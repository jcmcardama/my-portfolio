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
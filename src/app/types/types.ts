import { SvgIconComponent } from "@mui/icons-material";
import type { ThemeMode } from "../utils/constants";

// ===================================================================
// Color Mode Context Interface
// ===================================================================

export type ThemeModeType = typeof ThemeMode[keyof typeof ThemeMode];

export interface ColorModeContextType {
  mode: ThemeModeType;
  toggleColorMode: () => void;
}

// ===================================================================
// Nav Items Interface
// ===================================================================

export interface NavItem {
  label: string;
  path: string;
}

// ===================================================================
// Footer Items Interface
// ===================================================================

export interface FooterItem {
  label: string;
  href: string;
}

// ===================================================================
// About Page Interface
// ===================================================================

export interface CareerItem {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface TimelineRowProps {
  isLast: boolean;
  children: React.ReactNode;
}

// ===================================================================
// Projects Page Interface
// ===================================================================

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  deployed: boolean;
}

// ===================================================================
// Skills Page Interface
// ===================================================================

export interface Skill {
  name: string;
  icon: SvgIconComponent;
}

export interface SkillCategory {
  category: string;
  icon: SvgIconComponent;
  description: string;
  skills: Skill[];
}

// ===================================================================
// Contact Page Interface
// ===================================================================

export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
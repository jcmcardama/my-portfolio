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
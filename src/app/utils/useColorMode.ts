import { createContext, useContext } from "react";

interface ColorModeContextType {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
import { createContext, useContext } from "react";
import type { ColorModeContextType } from "../types/types";

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
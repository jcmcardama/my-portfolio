import { createContext, useContext } from "react";
import type { ColorModeContextType } from "../types/types";
import { ThemeMode } from "./constants";

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: ThemeMode.LIGHT,
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
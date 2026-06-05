import { useMemo, useState, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "./utils/useColorMode";
import { darkTheme, lightTheme } from "./styles/theme";
import { CssBaseline } from "@mui/material";
import { ThemeMode } from "./utils/constants";
import type { ThemeModeType } from "./types/types";

// Font imports
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-serif-display/400.css';

interface AppStylingProps {
  children: ReactNode;
}

export const AppStyling = ({ children }: AppStylingProps) => {
    const [mode, setMode] = useState<ThemeModeType>(ThemeMode.LIGHT);
    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => setMode(prev => prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT),
    }), [mode]);
    const theme = useMemo(() => mode === ThemeMode.LIGHT ? lightTheme : darkTheme, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
};

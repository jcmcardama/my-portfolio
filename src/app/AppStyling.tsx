import { useMemo, useState, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "./utils/useColorMode";
import { darkTheme, lightTheme } from "./styles/theme";
import { CssBaseline } from "@mui/material";

// Font imports
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-serif-display/400.css';

interface AppStylingProps {
  children: ReactNode;
}

export const AppStyling = ({ children }: AppStylingProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => setMode(prev => prev === 'light' ? 'dark' : 'light'),
    }), [mode]);
    const theme = useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
};

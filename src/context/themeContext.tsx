import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {Box, ThemeProvider} from "@mui/material";
import {LightTheme, DarkTheme} from "../themes";

interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext: React.Context<IThemeContext> = createContext<IThemeContext>({} as IThemeContext);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const appUseThemeContext = (): IThemeContext => {
   return useContext<IThemeContext>(ThemeContext);
}
export const AppThemeProvider: React.FC<IThemeProviderProps> = ({children}: IThemeProviderProps) => {
    const [theme, setTheme]
        = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        console.log("toggleTheme");
            setTheme(theme === "light" ? "dark" : "light");
        }
        , [theme]);

    const themeUse = useMemo(() => {
            return theme === "light" ? LightTheme : DarkTheme;
        }
        , [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={themeUse}>
                <Box
                    height={'100vh'}
                    bgcolor={themeUse.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
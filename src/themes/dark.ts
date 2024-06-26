import {createTheme, Theme} from "@mui/material";
import {cyan, yellow} from "@mui/material/colors";

export const DarkTheme : Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fff',
        },
        background: {
            default: '#282828',
            paper: '#303134',
        },
    },
});
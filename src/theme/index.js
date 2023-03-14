import { createTheme } from '@mui/material';

export const appTheme = createTheme({


    palette: {
        mode: 'dark',
        borderShade: { main: 'rgba(255,255,255,0.3)' }
    },



    typography: {
        fontSize: 12,
        fontFamily: "'Montserrat', 'sans-serif', 'Nunito Sans'",
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    minHeight: '100vh',
                    backgroundColor: '#24093d',
                },
            },
        },
    },
});
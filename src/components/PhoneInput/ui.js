import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CountryListWrapper = styled(Box)(({ theme, error }) => ({
    height: '100%',
    width: '100%',
    '& .form-control': {
        background: 'transparent',
        padding: '14.5px 14px 12.5px 58px',
        width: '100%',
        borderRadius: '8px',
        borderColor: error && 'red',

        '&:hover': {
            borderColor: error ? 'red' : theme.palette.primary.main,
        },
        '&:focus': {
            borderColor: error ? 'red' : theme.palette.primary.main,
            boxShadow: 'none',
        },
    },
    '& .special-label': {
        display: 'block',
        left: '10px',
        color: error ? 'red' : theme.palette.secondary.main,
        fontFamily: "'Montserrat', 'sans-serif', 'Nunito Sans'",
        fontSize: '0.7rem',
        background: '#24093d'
    },
    '& .flag-dropdown ul': {
        "& .search": {
            backgroundColor: '#24093d'
        },
        '& country.highlight': {
            backgroundColor: '#4424D6',
        },
        "& .country:hover": {
            backgroundColor: '#4424D6',
            opacity: 0.9
        },
        backgroundColor: '#24093d'
    }
}));
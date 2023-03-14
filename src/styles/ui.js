import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const FormWrapper = styled(Box)(({ theme }) => ({
    minWidth: '400px',
    minHeight: '400px',
    width: 'fit-content',
    margin: '0 auto',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    border: `1px solid ${theme.palette.borderShade.main}`,
    borderRadius: '1em',
    padding: '1em',
    marginTop: '5em'
}));

export const StyledFormHeading = styled(Typography)({
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 500,
    textAlign: 'center'
});

export const Form = styled('form')({
    marginTop: '2em'
})

export const StyledLink = styled(Link)({
    textDecoration: 'none',
    fontSize: '1.3em',
    background: '#ccc',
    padding: '0.5em',
    color: '#000',
    fontWeight: 500
});
import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#000',
    padding: '1em',
    transition: 'scale 0.3s',
    "&:hover": {
        backgroundColor: '#fff',
        color: '#000',
        opacity: 0.9,
        scale: '1.03'
    }
})
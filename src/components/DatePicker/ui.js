import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledDatePicker = styled(DatePicker)(({ theme, error }) => ({
    color: theme.palette.primary.main,
    width: '100%',
    '& .MuiFormLabel-root': {
        fontSize: '1rem',
        color: error ? 'red' : theme.palette.secondary.main,
    },
    '& .MuiInputBase-root': {
        fontSize: '1rem',
        fontWeight: 500,
        borderRadius: '0.5rem',

    },
}));
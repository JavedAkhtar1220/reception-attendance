import { Box, styled, Typography } from "@mui/material";

// Layout Styling 
export const LayoutWrapper = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'stretch'
})

// Header Styling 
export const HeaderWrapper = styled(Box)(({ theme }) => ({
    padding: '2em 0',
    position: 'sticky',
    top: 0,
    left: 0,
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${theme.palette.borderShade.main}`
}));

export const StyledHeaderHeading = styled(Typography)({
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '2px'
})

// Children Styling
export const ChildrenWrapper = styled(Box)({
    flex: 1,
    padding: '1em'
});
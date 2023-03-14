import { Container } from "@mui/material";
import React from "react";
import { HeaderWrapper, StyledHeaderHeading } from "../ui";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container maxWidth="xl">
        <StyledHeaderHeading>Reception Attendance</StyledHeaderHeading>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

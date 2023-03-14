import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ChildrenWrapper, LayoutWrapper } from "./ui";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ChildrenWrapper>
        <Outlet />
      </ChildrenWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

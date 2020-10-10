import React from "react";
import { NavigationWrapper, StyledNavigationLink } from "./style";

const Navigation = () => (
  <NavigationWrapper className="mt-5">
    <StyledNavigationLink to="/">Home</StyledNavigationLink>
    <StyledNavigationLink to="/about">About</StyledNavigationLink>
    <StyledNavigationLink to="/projects">Projects</StyledNavigationLink>
    <StyledNavigationLink to="/contact">Contact</StyledNavigationLink>
  </NavigationWrapper>
);

export default Navigation;

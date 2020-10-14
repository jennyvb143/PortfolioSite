import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/jenniferbaxter-jvbaxter.com-logo.png";
import Navigation from "./Navigation";
import { LogoWrapper } from "./style";

const Header = () => {
  return (
    <>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="jvBaxter.com Logo" />
        </Link>
      </LogoWrapper>
      <Navigation />
    </>
  );
};

export default Header;

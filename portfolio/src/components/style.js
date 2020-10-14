import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export const AppGlobalStyles = styled.div`
  height: 100vh;

  & h1 {
    font-family: "lemonmilk", sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    padding-bottom: 0.5em;
    color: #f48b88;
  }
  & h1.home {
    font-family: "Poppins", sans-serif;
  }
  & h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 1.5em;
    color: #f48b88;
  }
  & h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-size: 1.5em;
  }
  & p {
    font-family: "Poppins", sans-serif;
  }
  & p.bold {
    font-weight: 600;
  }
  & p.medium {
    font-weight: 300;
  }
  & p.light {
    font-weight: 100;
  }
  & div.spacer-extra-small {
    height: 0.5em;
  }
  & div.spacer-small {
    height: 1em;
  }
  & div.spacer-medium {
    height: 2em;
  }
  & div.spacer-large {
    height: 3em;
  }
  & .p-6 {
    padding: 4.5em;
  }
  & a {
    font-family: "Poppins", sans-serif;
    color: #000;
  }
  & a:link,
  a:visited,
  a:hover,
  a:active {
    color: #000;
    text-decoration: none;
  }
  & .faIcon {
    margin-right: 0.5em;
  }
`;

export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeaderWrapper = styled.div`
  background-color: #fae7e7;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
  padding-top: 3em;
  & img {
    width: 100%;
  }
`;

export const NavigationWrapper = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledAvatarImage = styled(Image)`
  width: 250px;
  display: block;
  margin: 0 auto;
`;

export const StyledFigure = styled(Figure)`
  width: 16%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 50%;
  }
`;

export const StyledFooterRow = styled(Row)`
  background-color: #f48b88;
`;

export const StyledMainRow = styled(Row)`
  flex-grow: 1;
`;

export const StyledNavigationLink = styled(Link)`
  margin-bottom: 0.5em;
  font-size: 1.5em;
  color: #000;
  text-decoration: none;

  && {
    font-family: "lemonmilk", sans-serif;
  }

  & a:link,
  a:visited,
  a:hover,
  a:active {
    color: #000;
    text-decoration: none;
  }
`;

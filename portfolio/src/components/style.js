import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';

export const AppGlobalStyles = styled.div`
  height: 100vh;

  & h1 {
    font-family: 'Poppins', sans-serif;
    font-weight:100;
    font-size: 2em;
    padding-bottom: .5em;
  }
  & h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 1.5em;
  }
  & h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 1.5em;
  }
  & p {
    font-family: 'Poppins', sans-serif;
  }
  & p.bold {
    font-weight:600;
  }
  & p.medium {
    font-weight:300;
  }
  & p.light {
    font-weight:100;
  }
  & div.spacer-extra-small {
    height: .5em;
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
  & a {
    color: #000;
  }
  & a:link, a:visited, a:hover, a:active {
    color: #000;
    text-decoration: none;
  }
  & .faIcon {
    margin-right: .5em;
  }
`

export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const HeaderWrapper = styled.div`
  background-color: #fae7e7;
  height: 100%;
`

export const LogoWrapper = styled.div`
  max-width: 80%;
  padding-top: 3em;
  & img {
    width:100%;
  }
` 

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledAvatarImage = styled(Image)`
  width: 250px;
  display: block;
  margin: 0 auto;
`

export const StyledFigure = styled(Figure)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledFooterRow = styled(Row)`
  background-color: #f48b88;
`

export const StyledMainRow = styled(Row)`
  flex-grow: 1;
`

export const StyledNavigationLink = styled(Link)`
  margin-bottom: .5em;
  font-family: 'Lemon/Milk';
  font-size: 1.5em;
  color: #000;
  text-decoration: none;

  &:link, :visited, :hover, :active {
    color: #000;
    text-decoration: none;
  }
` 

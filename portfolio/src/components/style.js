import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const AppGlobalStyles = styled.div`
  height: 100vh;

  & h1 {
    font-family: 'Poppins', sans-serif;
    font-weight:100;
    font-size: 2em;
  }
  & p {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    padding-top: 1em;
    padding-bottom: 2em;
  }
`

export const ContentWrapper = styled.div`
  
`

export const StyledContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const StyledFooterRow = styled(Row)`
  background-color: #f48b88;
`

export const StyledMainRow = styled(Row)`
  flex-grow: 1;
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

export const StyledLink = styled(Link)`
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

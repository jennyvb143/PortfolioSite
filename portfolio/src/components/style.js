import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  background-color: #fae7e7;
`

export const LogoWrapper = styled.div`
  width: 300px;
  & img {
    width:100%;
  }
` 

export const NavigationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledLink = styled(Link)`
  padding-bottom: .5em;
  font-family: 'Lemon/Milk';
  font-size: 1.5em;
  color: #000;
  text-decoration: none;

  &:link, :visited, :hover, :active {
    color: #000;
    text-decoration: none;
  }
` 

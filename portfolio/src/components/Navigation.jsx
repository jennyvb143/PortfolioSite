import React from 'react';
import { NavigationWrapper, StyledLink } from './style'

const Navigation = () => (
	<NavigationWrapper className='mt-5'>
		<StyledLink to="/">Home</StyledLink>
		<StyledLink to="/about-me">About Me</StyledLink>
		<StyledLink to="/portfolio">Portfolio</StyledLink>
	</NavigationWrapper>
);

export default Navigation;

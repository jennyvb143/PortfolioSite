import React from 'react';
import { NavigationWrapper, StyledLink } from './style'

const Navigation = () => (
	<NavigationWrapper className='mt-5'>
		<StyledLink to='/'>Home</StyledLink>
		<StyledLink to='/about'>About</StyledLink>
		<StyledLink to='/projects'>Projects</StyledLink>
		<StyledLink to='/contact'>Contact</StyledLink>
	</NavigationWrapper>
);

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => (
	<div className="flex-column">
		<Link to="/">Home</Link>
		<Link to="/about-me">About Me</Link>
		<Link to="/portfolio">Portfolio</Link>
	</div>
);

export default Navigation;

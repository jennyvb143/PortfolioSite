import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Menu = () => (
	<Nav defaultActiveKey="/home" className="flex-column">
	  	<Nav.Link href="/home">Home</Nav.Link>
	  	<Nav.Link eventKey="link-1">About Me</Nav.Link>
	  	<Nav.Link eventKey="link-2">Portfolio</Nav.Link>
	</Nav>
);

export default Menu;

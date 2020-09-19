import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledContainer } from './style'
import Sidebar from './Sidebar'

const App = () => (
	<StyledContainer>
	  <Container>
	  <Row noGutters>
	    <Col><Sidebar /></Col>
	    <Col xs={6}>content</Col>
	  </Row>
	  </Container>
	 </ StyledContainer>
);

export default App;

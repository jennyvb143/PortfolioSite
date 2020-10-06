import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header'
import Menu from './Menu'
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import { StyledContainer } from './style'

const App = () => {
	return (
		<Router>
			<StyledContainer>
				<Container>
					<Row noGutters>
						<Col>
							<Header />
							<Menu />
						</Col>
						<Col xs={6}>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about-me" component={AboutMe} />
								<Route exact path="/portfolio" component={Portfolio} />
							</Switch>
						</Col>
					</Row>
				</Container>
				
			</ StyledContainer>
		</Router>
	)
};

export default App;

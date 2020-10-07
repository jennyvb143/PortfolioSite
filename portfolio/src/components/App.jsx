import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header'
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import { HeaderWrapper } from './style'

const App = () => {
	return (
		<Router>
			<Container className='ml-0'>
				<Row>
					<HeaderWrapper>
					<Col xs={12} lg={6}>
						<Header />
					</Col>
					</HeaderWrapper>
					<Col xs={12} lg={6}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about-me" component={AboutMe} />
							<Route exact path="/portfolio" component={Portfolio} />
						</Switch>
					</Col>
				</Row>
			</Container>	
		</Router>
	)
};

export default App;

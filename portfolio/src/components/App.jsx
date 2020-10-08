import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { AppGlobalStyles, HeaderWrapper, StyledContainer, StyledFooterRow, StyledMainRow } from './style'

const App = () => {
	return (
		<Router>
			<AppGlobalStyles>
				<StyledContainer fluid>
					<StyledMainRow>
						<Col xs={12} md={4} className='pl-0 pr-0'>
							<HeaderWrapper>
								<Header />
							</HeaderWrapper>
						</Col>
						<Col xs={12} md={8} className='p-5 d-flex flex-column align-self-center'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/projects' component={Projects} />
								<Route exact path='/contact' component={Contact} />
							</Switch>
						</Col>
					</StyledMainRow>
					<StyledFooterRow>
						<Col xs={12} md={12}>
							<Footer />
						</Col>
					</StyledFooterRow>
				</StyledContainer>
			</AppGlobalStyles>
		</Router>
	)
};

export default App;

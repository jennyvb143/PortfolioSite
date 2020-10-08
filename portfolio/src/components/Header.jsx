import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/jenniferbaxter-jvbaxter.com-logo.png';
import Navigation from './Navigation'
import { LogoWrapper } from './style'

const Header = () => {
    return (
        <Container>
            <Row>
                <Col className='pl-5'>
                    <LogoWrapper>
                        <img src={logo} alt='jvBaxter.com Logo' />
                    </LogoWrapper>
                    <Navigation />
                </Col>
            </Row>
        </Container>
    )
}
 
export default Header;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/jenniferbaxter-jvbaxter.com-logo.png';
import Navigation from './Navigation'
import { LogoWrapper } from './style'

const Header = (props) => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <LogoWrapper>
                        <img src={logo} alt="Logo" />
                    </LogoWrapper>
                    <Navigation />
                </Col>
            </Row>
        </Container>
    )
}
 
export default Header;
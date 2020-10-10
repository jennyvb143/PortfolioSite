import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FigureCaption from 'react-bootstrap/FigureCaption'
import { StyledFigure } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faJsSquare, faReact, faHtml5, faCss3Alt, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <>
            <h1>More about me</h1>
            <p>In 1999, when HTML was still a relatively new technology, I took my first class on how to build websites. I\'ve been hooked ever since. When I got my first taste of HTML all those years ago, I had no idea I\'d cultivate such a love for coding and the power of the internet. \r\n\r\nMy specialty is front-end development with basic knowledge of back-end programming. I excel in UX/UI, web design, brand identity, and ecommerce, but I enjoy all facets of design and I find that I am constantly inspired by the design that exists all around us – the good, the bad, and the ugly. I\'ve lived all across the country and beyond (New York City, Los Angeles, Ohio, New Jersey, and Avignon, France, to name a few places) and I\'ve found that when it comes to design, there is one Universal Truth: No matter the Design Problem, there exists a Design Solution, and the best part of being a developer and designer is discovering what it is!  \r\n\r\nIn 2012, I completed a Certificate of Achievement in Graphic Design from Santa Monica College as well as a Department Certificate in Web Design in December 2013. I also completed a 4-year undergraduate degree at Ohio University with majors in journalism and French. I love being a student and continue to take courses to stay current with ever-changing technology.\r\n\r\nSo take a look around and get in touch with me!
                
                
                I love to code and I love the internet! 
                My focus is front-end development, with basic knowledge of back-end programming. 
                I excel in UX/UI, web design, and brand identity. 
                I have excellent typography, layout, and conceptual ability. 
                I also have strong interpersonal, language, and organizational skills.</p>
            <div className='spacer-large' />
            <h2>Primary Technologies</h2>
            <div className='spacer-small' />
            <Col>
                <Row className='justify-content-between'>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faJsSquare} size="2x" />
                        <FigureCaption>
                            <p>JavaScript</p>
                        </FigureCaption>
                    </StyledFigure>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faReact} size="2x" />
                        <FigureCaption>
                            <p>React/Redux</p>
                        </FigureCaption>
                    </StyledFigure>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faHtml5} size="2x" /> 
                        <FigureCaption>
                            <p>HTML/HTML5</p>
                        </FigureCaption>
                    </StyledFigure>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                        <FigureCaption>
                            <p>CSS/CSS3</p>
                        </FigureCaption>
                    </StyledFigure>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faSass} size="2x" />
                        <FigureCaption>
                            <p>Sass</p>
                        </FigureCaption>
                    </StyledFigure>
                    <StyledFigure>
                        <FontAwesomeIcon icon={faBootstrap} size="2x" />
                        <FigureCaption>
                            <p>Bootstrap</p>
                        </FigureCaption>
                    </StyledFigure>
                </Row>
            </Col>
            <h2>Other Technologies</h2>
            <p>list</p>
            <div className='spacer-small' />
            <h3>
                <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                    Download Resume (PDF) <FontAwesomeIcon icon={faFilePdf} size="1.5x" />
                </a>
            </h3>
        </>
    )
}
 
export default About;
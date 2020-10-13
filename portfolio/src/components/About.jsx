import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FigureCaption from "react-bootstrap/FigureCaption";
import { StyledFigure } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
  faJsSquare,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <h1>More about me</h1>
      <p>
        In 1999, when HTML was still a relatively new technology, I took my
        first class on how to build websites. I've been hooked ever since. When
        I got my first taste of HTML all those years ago, I had no idea I'd
        cultivate such a love for programming and the power of the internet. My
        specialty is front-end development with basic knowledge of back-end
        programming. I excel in UX/UI, web design, brand identity, and
        ecommerce, but I enjoy all facets of design and I find that I am
        constantly inspired by the design that exists all around us – the good,
        the bad, and the ugly.
      </p>
      <p>
        I've lived all across the country and beyond and I've found that when it
        comes to design, there is one Universal Truth: No matter the Design
        Problem, there exists a Design Solution, and the best part of being a
        developer and designer is discovering what it is! I love being a student
        and continue to take courses to stay current with ever-changing
        technology. So take a look around and get in touch with me!
      </p>
      <div className="spacer-medium" />
      <h2>Primary Languages & Frameworks</h2>
      <div className="spacer-small" />
      <div>
        <StyledFigure>
          <FontAwesomeIcon icon={faJsSquare} size="2x" />
          <FigureCaption>
            <p>JavaScript (ES6+)</p>
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
      </div>
      <h2>Other Tools & Technologies</h2>
      <Row>
        <Col>
          <ul>
            <li>jQuery</li>
            <li>Styled Components</li>
            <li>AJAX/JSON</li>
            <li>Git/GitHub</li>
            <li>Command Line</li>
            <li>GraphQL</li>
            <li>Accessibility</li>
            <li>Regular Expressions</li>
            <li>PHP/mySQL</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Contentstack</li>
            <li>WordPress</li>
            <li>Responsive Design</li>
            <li>InVision</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Balsamiq</li>
          </ul>
        </Col>
      </Row>
      <div className="spacer-small" />
      <h2>
        <a
          href="/JenniferBaxter-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF) <FontAwesomeIcon icon={faFilePdf} size="1.5x" />
        </a>
      </h2>
    </>
  );
};

export default About;

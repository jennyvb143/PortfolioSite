import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FigureCaption from "react-bootstrap/FigureCaption";
import Pdf from "../files/JenniferBaxter-Resume.pdf";
import { StyledFigure } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faGithub,
  faGit,
  faSketch,
  faInvision,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <h1>More about me</h1>
      <p>
        In 1999, when HTML was still a relatively new technology, I took my
        first class on how to build websites. When I got my first taste of HTML
        all those years ago, I had no idea I'd cultivate such a love for
        programming and the power of the internet. My specialty is front-end
        development with basic knowledge of back-end programming. I excel in
        UX/UI, web design, brand identity, and ecommerce, but I enjoy all facets
        of design and I find that I am constantly inspired by the design that
        exists all around us – the good, the bad, and the ugly.
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
      <h2>Tools & Technologies</h2>
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
        <svg fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m.975 0h24.05c.5385 0 .975.436522.975.975v24.05c0 .5385-.4365.975-.975.975h-24.05c-.538478 0-.975-.4365-.975-.975v-24.05c0-.538478.436522-.975.975-.975zm13.4782 13.8324v-2.1324h-9.2532v2.1324h3.30357v9.4946h2.62983v-9.4946zm1.0485 9.2439c.4241.2162.9257.3784 1.5048.4865.579.1081 1.1893.1622 1.8309.1622.6253 0 1.2193-.0595 1.782-.1784.5628-.1189 1.0562-.3149 1.4803-.5879s.7598-.6297 1.0072-1.0703.3711-.9852.3711-1.6339c0-.4703-.0707-.8824-.212-1.2365-.1414-.3541-.3453-.669-.6117-.9447s-.5859-.523-.9583-.7419c-.3725-.2189-.7925-.4257-1.2601-.6203-.3425-.1406-.6497-.2771-.9216-.4095-.2718-.1324-.5029-.2676-.6932-.4054-.1903-.1379-.3371-.2838-.4404-.4379-.1033-.154-.155-.3284-.155-.523 0-.1784.0463-.3392.1387-.4824.0924-.1433.2229-.2663.3915-.369.1685-.1027.3751-.1824.6198-.2392.2447-.0567.5165-.0851.8156-.0851.2174 0 .4472.0162.6891.0486.242.0325.4853.0825.7299.15.2447.0676.4826.1527.7137.2555.2311.1027.4445.2216.6402.3567v-2.4244c-.3969-.1514-.8305-.2636-1.3008-.3365-.4704-.073-1.01-.1095-1.6189-.1095-.6199 0-1.2071.0662-1.7617.1987-.5546.1324-1.0425.3392-1.4639.6203s-.7544.6392-.9991 1.0743c-.2447.4352-.367.9555-.367 1.5609 0 .7731.2243 1.4326.6729 1.9785.4485.546 1.1295 1.0082 2.043 1.3866.3588.146.6932.2892 1.0031.4298.3099.1405.5777.2865.8033.4378.2257.1514.4037.3162.5342.4946s.1958.3811.1958.6082c0 .1676-.0408.323-.1224.4662-.0815.1433-.2052.2676-.371.373-.1659.1054-.3725.1879-.6199.2473-.2474.0595-.5369.0892-.8686.0892-.5654 0-1.1254-.0986-1.68-.2959s-1.0684-.4933-1.5415-.8879z" fill="currentColor" fill-rule="evenodd"></path></svg>
        <FigureCaption>
            <p>TypeScript</p>
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
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FigureCaption>
            <p>GitHub</p>
          </FigureCaption>
        </StyledFigure>
        <StyledFigure>
          <FontAwesomeIcon icon={faGit} size="2x" />
          <FigureCaption>
            <p>Git</p>
          </FigureCaption>
        </StyledFigure>
        <StyledFigure>
          <FontAwesomeIcon icon={faBootstrap} size="2x" />
          <FigureCaption>
            <p>Bootstrap</p>
          </FigureCaption>
        </StyledFigure>
        <StyledFigure>
          <FontAwesomeIcon icon={faInvision} size="2x" />
          <FigureCaption>
            <p>InVision</p>
          </FigureCaption>
        </StyledFigure>
        <StyledFigure>
          <FontAwesomeIcon icon={faSketch} size="2x" />
          <FigureCaption>
            <p>Sketch</p>
          </FigureCaption>
        </StyledFigure>
        <StyledFigure>
          <FontAwesomeIcon icon={faUniversalAccess} size="2x" />
          <FigureCaption>
            <p>Accessibility</p>
          </FigureCaption>
        </StyledFigure>
      </div>
      
      <Col>
        <Row>
          <p className="bold">Languages: </p>&nbsp;<p>JavaScript (ES6+), TypeScript, HTML, CSS, Sass, PHP, mySQL</p>
        </Row>
        <Row>
          <p className="bold">Frameworks/Libraries: </p>&nbsp;<p>React, Redux, Next.js, Jest, Enzyme, Apollo, GraphQL, jQuery</p>
        </Row>
        <Row>
          <p className="bold">Design & UX/UI: </p>&nbsp;<p>Styled Components, Sketch, InVision, Balsamiq, Adobe CC, Storybook</p>
        </Row>
        <Row>
          <p className="bold">Dev Tools: </p>&nbsp;<p>Git, yarn/npm, VS Code, Insomnia, TablePlus</p>
        </Row>
        <Row>
          <p className="bold">Services/Other: </p>&nbsp;<p>GitHub, Contentstack, Bootstrap, WordPress, Accessibility, RegEx</p>
        </Row>
      </Col>
      <div className="spacer-small" />
      <h2 className="font-weight-bold">
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          Download Resume (PDF) <FontAwesomeIcon icon={faFilePdf} size="1.5x" />
        </a>
      </h2>
    </>
  );
};

export default About;

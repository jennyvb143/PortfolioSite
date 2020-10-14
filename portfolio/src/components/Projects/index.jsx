import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import FigureCaption from "react-bootstrap/FigureCaption";
import Button from "react-bootstrap/Button";
import ElsCard from "../images/projects/els-card.png";
import BedBabyCard from "../images/projects/bed-baby-card.png";
import FreitagCard from "../images/projects/freitag-card.png";
import "./style.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p className="bold">
        Here are a few design and developent projects I've worked on.
      </p>
      <div className="spacer-medium" />
      <div className="projects-grid">
        <Row>
          <Col lg={4} md={12}>
            <Figure className="projects-figure">
              <img src={ElsCard} alt="" />
              <FigureCaption>
                <p>
                  ELS has helped millions of students from more than 170
                  countries learn English to prepare them for academic study at
                  universities in the US.
                </p>
                <a
                  href="https://www.els.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="dark">Visit Website</Button>
                </a>
              </FigureCaption>
              <div className="overlay"></div>
            </Figure>
          </Col>
          <Col lg={4} md={12}>
            <Figure className="projects-figure">
              <img src={BedBabyCard} alt="" />
              <FigureCaption>
                <p>
                  Bed Bath & Beyond and its subsidiary buybuy BABY are household
                  names in the retail industry.
                </p>
                <Link to="/bed-baby">
                  <Button variant="dark">View Work</Button>
                </Link>
              </FigureCaption>
              <div className="overlay"></div>
            </Figure>
          </Col>
          <Col lg={4} md={12}>
            <Figure className="projects-figure">
              <img src={FreitagCard} alt="" />
              <FigureCaption>
                <p>
                  Swiss company Freitag sells one-of-a-kind bags and accessories
                  made from recycled truck tarp and fully compostable textiles.
                </p>
                <Link to="/freitag">
                  <Button variant="dark">View Ads</Button>
                </Link>
              </FigureCaption>
              <div className="overlay"></div>
            </Figure>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;

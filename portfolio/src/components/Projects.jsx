import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ElsCard from "./images/projects/els-card.png";
import BedBabyCard from "./images/projects/bed-baby-card.png";
import FreitagCard from "./images/projects/freitag-card.jpg";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="spacer-extra-small" />
      <h2>Here are a few design and developent projects I've worked on.</h2>
      <div className="spacer-large" />
      <CardDeck>
        <Card>
          <Card.Img className="card-image" variant="top" src={ElsCard} />
          <Card.Body>
            <Card.Title>ELS.edu</Card.Title>
            <Card.Text>
              I led team in the redesign of els.edu to create an intuitive,
              user-centric responsive site with best-in-class UX/UI. I also
              helped to lead team in the development of the redesigned site to
              create a seamless experience across multiple devices and fast
              browsing. We achieved annual lead targets by increasing student
              applications and enrollments after the new site was launched.
            </Card.Text>
            <a
              href="https://www.els.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark">Visit Website &gt;</Button>
            </a>
          </Card.Body>
        </Card>
        <div className="spacer-large" />
        <Card>
          <Card.Img className="card-image" variant="top" src={BedBabyCard} />
          <Card.Body>
            <Card.Title>Bed Bath & Beyond and buybuy BABY</Card.Title>
            <Card.Text>
              I served as a lead development resource for A/B testing for both
              Bed Bath & Beyond and buybuy BABY in a fast-paced, high-visibility
              environment to boost incremental revenue. I was also utilized as
              UX/UI design resource and for content creation for numerous teams.
              My redesign of the Bed Bath & Beyond Registry page led to an
              increase in Registries and in Registry purchases.
            </Card.Text>
            <a
              href="https://www.els.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark">View Work Samples &gt;</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img className="card-image" variant="top" src={FreitagCard} />
          <Card.Body>
            <Card.Title>Freitag Print Ads</Card.Title>
            <Card.Text>
              This was one of the first design projects I ever worked on as a
              student several years ago and it remains one of my favorites to
              this day for its simplicity and eye-catching visuals. I created a
              series of four print ads with copy that I wrote and photography
              provided by Freitag. The message conveyed is that "eco-friendly"
              and "on-trend" don't have to be mutually exclusive.
            </Card.Text>
            <a
              href="https://www.els.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark">View Ads &gt;</Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Projects;

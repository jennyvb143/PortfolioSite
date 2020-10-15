import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import BedBaby1 from "../images/projects/bed-baby-main-1.jpg";
import BedBaby2 from "../images/projects/bed-baby-main-2.jpg";
import BedBaby3 from "../images/projects/bed-baby-main-3.jpg";
import BedBaby4 from "../images/projects/bed-baby-main-4.jpg";
//import BedBaby5 from "../images/projects/bed-baby-main-5.jpg";
import BedBaby6 from "../images/projects/bed-baby-main-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const BedBaby = () => {
  return (
    <>
      <h1>Bed Bath & Beyond and buybuy BABY</h1>
      <p>
        I served as a lead development resource for A/B testing for both Bed
        Bath & Beyond and buybuy BABY in a fast-paced, high-visibility
        environment to boost incremental revenue. I was also utilized as UX/UI
        design resource and for content creation for numerous teams.
      </p>
      <div className="spacer-small" />
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
      <div className="spacer-large" />
      <div className="spacer-small" />
      <div className="pr-1 pl-1">
        <img
          src={BedBaby1}
          alt="Bed Bath & Beyond Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Design{" "}
            <FontAwesomeIcon icon={faPalette} style={{ fontSize: "2x" }} />
          </Badge>
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          I created crystal-clear calls-to-action (CTAs) in this redesign of the
          Bed Bath & Beyond Registry page header to allow Registrants and
          Registry Shoppers to easily find their way. I developed this A/B test
          which statistical analysis determined was a success as it led to an
          increase in Registries and Registry purchases. The redesign was
          eventually added to the permanent codebase.
        </p>
      </div>

      <div className="spacer-small" />
      <hr />
      <div className="spacer-medium" />

      <div className="pr-1 pl-1">
        <img
          src={BedBaby2}
          alt="Bed Bath & Beyond Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Design{" "}
            <FontAwesomeIcon icon={faPalette} style={{ fontSize: "2x" }} />
          </Badge>
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          For the first time, Bed Bath was offering customers the option to
          purchase custom bedding. For this project, I wrote the content,
          created the illustrations, crafted the UX/UI, and developed the final
          product. The UX/UI had to be clean, concise, and foolproof so that
          customers could take one look at this page and instantly understand
          how the process worked. The interaction design functioned like a
          wizard, walking the user through each step of the ordering process as
          they made their selections.
        </p>
      </div>

      <div className="spacer-small" />
      <hr />
      <div className="spacer-medium" />

      <div className="pr-1 pl-1">
        <img
          src={BedBaby3}
          alt="Bed Bath & Beyond Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Design{" "}
            <FontAwesomeIcon icon={faPalette} style={{ fontSize: "2x" }} />
          </Badge>
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          I designed and developed this interactive Sheex banner so that
          customers could easily explore and shop Sheex bedding. The design
          helped customers understand that Sheex bedding is separated into three
          main categories ("Zones") so they could find their "Sleep-Fit Zone"
          and make an educated buying decision. The interaction design allowed
          customers to simply hover over each Zone to read more about it and/or
          watch a video or shop that Zone.
        </p>
      </div>

      <div className="spacer-small" />
      <hr />
      <div className="spacer-medium" />

      <div className="pr-1 pl-1">
        <img
          src={BedBaby4}
          alt="Bed Bath & Beyond Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          I developed this redesign of the Bed Bath homepage for an extended A/B
          test. It was a complex test that introduced entirely new programming
          technologies and page structure to the site.
        </p>
      </div>

      <div className="spacer-small" />
      <hr />
      <div className="spacer-medium" />

      {/*
      <div className="pr-1 pl-1">
        <img
          src={BedBaby5}
          alt="Bed Bath & Beyond Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          I developed this redesign of the Bed Bath homepage for an extended A/B
          test.
        </p>
      </div>

      <div className="spacer-small" />
      <hr />
      <div className="spacer-medium" />
      */}

      <div className="pr-1 pl-1">
        <img
          src={BedBaby6}
          alt="buybuy BABY Work Sample"
          className="projects-img-bed-baby"
        />
        <div className="spacer-medium" />
        <Row className="justify-content-center">
          <Badge pill variant="dark">
            Development{" "}
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "2x" }} />
          </Badge>
        </Row>
        <div className="spacer-small" />
        <p>
          I developed this responsive landing page for buybuy BABY to clarify
          the company's price match policy.
        </p>
      </div>

      <div className="spacer-medium" />
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
    </>
  );
};

export default BedBaby;

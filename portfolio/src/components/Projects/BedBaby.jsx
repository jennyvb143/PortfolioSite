import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
//import FreitagAds from "../images/projects/freitag-ads.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const BedBaby = () => {
  return (
    <>
      <h1>Bed Bath & Beyond and buybuy BABY</h1>
      <p>
        I served as a lead development resource for A/B testing for both Bed
        Bath & Beyond and buybuy BABY in a fast-paced, high-visibility
        environment to boost incremental revenue. I was also utilized as UX/UI
        design resource and for content creation for numerous teams. My redesign
        of the Bed Bath & Beyond Registry page header (below) led to an increase
        in Registries and in Registry purchases.
      </p>
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
      <div className="spacer-small" />
      <div className="spacer-large" />
      <FontAwesomeIcon icon={faPaintRoller} style={{ fontSize: "10em" }} />
      <div className="spacer-small" />
      <p>THIS PAGE IS A WORK IN PROGRESS. CHECK BACK SOON!</p>
      <div className="spacer-medium" />
      {/*<img src={FreitagAds} alt="Freitag Print Ads" className="projects-img" />*/}
      <div className="spacer-medium" />
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
    </>
  );
};

export default BedBaby;

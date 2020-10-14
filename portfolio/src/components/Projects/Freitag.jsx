import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FreitagAds from "../images/projects/freitag-ads.jpg";
import "./style.css";

const Freitag = () => {
  return (
    <>
      <h1>Freitag Print Ads</h1>
      <p>
        This was one of the first design projects I did several years ago as a
        student and it remains one of my favorites to this day for its
        simplicity and eye-catching visuals. I created a series of four print
        ads with copy that I wrote and photography provided by Freitag. The
        message conveyed is that "eco-friendly" and "on-trend" don't have to be
        mutually exclusive.
      </p>
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
      <div className="spacer-medium" />
      <img
        src={FreitagAds}
        alt="Freitag Print Ads"
        className="projects-img-freitag"
      />
      <div className="spacer-medium" />
      <Link to="/projects">
        <Button variant="dark">Back to Projects</Button>
      </Link>
    </>
  );
};

export default Freitag;

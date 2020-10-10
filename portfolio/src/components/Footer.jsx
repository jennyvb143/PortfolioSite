import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="spacer-small" />
      <p className="bold justify-content-center">
        Handcrafted by me <FontAwesomeIcon icon={faCopyright} /> 2020
      </p>
      <p className="medium justify-content-center">
        BUILT WITH <FontAwesomeIcon icon={faReact} spin />{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT
        </a>{" "}
        AND{" "}
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT BOOTSTRAP
        </a>
      </p>
    </>
  );
};

export default Footer;

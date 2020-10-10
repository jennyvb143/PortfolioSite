import React from "react";
import avatar from "./images/jennifer-baxter-avatar.png";
import { StyledAvatarImage } from "./style";

const Home = () => {
  return (
    <>
      <StyledAvatarImage src={avatar} alt="Jennifer Baxter" />
      <div className="spacer-medium" />
      <h1>
        Hi. I'm Jenn Baxter. I'm a developer and designer. My favorite place to
        be is in front of my computer, creating and building beautiful, useful
        things.
      </h1>
      <p className="bold">
        My focus is front end web development, working primarily in HTML, CSS,
        Javascript, and Javascript frameworks. These days I'm really into React,
        which is what I used to build this responsive site. I love to learn and
        I love what I do. Take a look around to learn more about me or check out
        some of my work.
      </p>
    </>
  );
};

export default Home;

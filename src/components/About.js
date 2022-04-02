import React from "react";
import { Button } from "react-bootstrap";
import image from "../images/aboutmeimg.JPG";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_image">
        <img src={image} alt="Profile pic"></img>
      </div>
      <div className="about_content">
        <h2 style={{ color: "violet" }}>ABOUT ME</h2>
        <p>
          I'm a Software tester in a banking product based company and i have a
          experiance of 2.5 years in manual and automation testing. Testing is
          not my choice, I like to code which brings me happines, i got
          interested towards web development while exploring MERN stack i like
          to explore and work into Full stack web development.
        </p>
        <Button
          variant="secondary"
          href="https://drive.google.com/file/d/1V7d7YuDWUKpHhdhaR4ZDEGQPr_mtH7nG/view?usp=sharing"
          target="_blank"
        >
          My Resume
        </Button>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import DevIcon from "devicon-react-svg";

const Technologies = () => {
  return (
    <div className="tech_container" id="tech">
      <h3 style={{ textAlign: "center" }}>Technologies that I use</h3>
      <div className="tech_icons_container">
        <div className="icon_badge">
          <DevIcon icon="react" />
          <span>React</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="javascript" />
          <span>Javascript</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="css3" />
          <span>CSS</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="html5" />
          <span>HTML</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="nodejs" />
          <span>Node JS</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="mongodb" />
          <span>Mongo DB</span>
        </div>
        <div className="icon_badge">
          <DevIcon icon="github_badge" />
          <span>Git Hub</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

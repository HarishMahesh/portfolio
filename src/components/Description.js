import React from "react";
import Typed from "react-typed";

const Description = () => {
  return (
    <div className="description">
      <h3>Hi There! 👋</h3>
      <h3>
        I'M <span style={{ color: "violet" }}>Harish</span>
      </h3>
      <b>
        <Typed
          strings={["Software Engineer", "", ""]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </b>
    </div>
  );
};

export default Description;

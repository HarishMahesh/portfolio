import React from "react";

export const Contact = () => {
  return (
    <div id="contact">
      <h2>
        Feel Free to <span style={{ color: "#87209e" }}>connect</span> with me
      </h2>
      <div>
        <i
          style={{ color: "#87209e", marginRight: "10px" }}
          class="fas fa-phone"
        ></i>
        <a href="tel:+919994451692" className="con-det">
          +91 9994451692
        </a>
      </div>
      <div>
        <i
          style={{ color: "#87209e", marginRight: "10px" }}
          class="fas fa-envelope"
        ></i>
        <a
          href="mailto:harishmahesh1911@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="con-det"
        >
          harishmahesh1911@gmail.com
        </a>
      </div>
    </div>
  );
};

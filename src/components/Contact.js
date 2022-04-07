import React from "react";

export const Contact = () => {
  return (
    <div id="contact">
      <h2>
        Feel Free to <span style={{ color: "#87209e" }}>connect</span> with me
      </h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <a href="tel:+919994451692" className="con-det">
            <i
              style={{ color: "#87209e", marginRight: "10px" }}
              class="fas fa-phone"
            ></i>
          </a>
        </div>
        <div>
          <a
            href="mailto:harishmahesh1911@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="con-det"
          >
            <i
              style={{ color: "#87209e", marginRight: "10px" }}
              class="fas fa-envelope"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

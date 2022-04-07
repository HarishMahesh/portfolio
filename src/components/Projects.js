import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div id="projects" style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h3 style={{ textAlign: "center", color: "#71787fd1" }}>Projects</h3>
      <Container>
        <Row>
          <Col md={6} style={{ marginTop: "15px" }}>
            <div className="project_container">
              <div className="project_img_container">
                <img
                  src="https://chameleoncollective.com/wp-content/uploads/2018/04/e-commerce-blog-post-scaled.jpg"
                  alt="e-com"
                ></img>
              </div>
              <div style={{ height: "200px" }}>
                <h4 style={{ color: "#607d8b" }}>H-CART</h4>
                <p style={{ color: "#607d8b" }}>
                  H-Cart is a full stack and fully functional e-commerece
                  website where the customer can buy the product and the seller
                  can sell a product, add new product and track the order
                  details.
                </p>
                <div className="projects_btn_container">
                  <Button
                    href="https://hcartecom.herokuapp.com"
                    target="_blank"
                    variant="secondary"
                  >
                    Live
                  </Button>
                  <Button
                    href="https://github.com/HarishMahesh/H-cart"
                    target="_blank"
                    variant="secondary"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} style={{ marginTop: "15px" }}>
            <div className="project_container">
              <div className="project_img_container">
                <img
                  src="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_6012b5c838d421611838920.png"
                  alt="we chat"
                ></img>
              </div>
              <div style={{ height: "200px" }}>
                <h4 style={{ color: "#607d8b" }}>We Chat</h4>
                <p style={{ color: "#607d8b" }}>
                  We chat is fullstack chat application with one on one chat as
                  well as group chatting functionality with instant messaging
                  and realtime notification of messages received.
                </p>
                <div className="projects_btn_container">
                  <Button
                    href="https://we-chat-ap.herokuapp.com/"
                    target="_blank"
                    variant="secondary"
                  >
                    Live
                  </Button>
                  <Button
                    href="https://github.com/HarishMahesh/Mern-Chat_app"
                    target="_blank"
                    variant="secondary"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} style={{ marginTop: "15px" }}>
            <div className="project_container">
              <div className="project_img_container">
                <img
                  src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/10/Blog-11-reasonsfeature-min.jpg"
                  alt="Money Manager"
                ></img>
              </div>
              <div style={{ height: "200px" }}>
                <h4 style={{ color: "#607d8b" }}>Money Manager</h4>
                <p style={{ color: "#607d8b" }}>
                  Money manager is a full stack application which is used to
                  track the income and expenses of the particular person.
                </p>
                <div className="projects_btn_container">
                  <Button
                    href="https://optimistic-jones-8295e2.netlify.app"
                    target="_blank"
                    variant="secondary"
                  >
                    Live
                  </Button>
                  <Button
                    href="https://github.com/HarishMahesh/money-manager-frontend"
                    target="_blank"
                    variant="secondary"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} style={{ marginTop: "15px" }}>
            <div className="project_container">
              <div className="project_img_container">
                <img
                  src="https://miro.medium.com/max/1400/1*14NgZjywc9Ip0B2UVc01Aw.jpeg"
                  alt="Notes taker"
                ></img>
              </div>
              <div style={{ height: "200px" }}>
                <h4 style={{ color: "#607d8b" }}>Notes Taker</h4>
                <p style={{ color: "#607d8b" }}>
                  Notes Taker is a full stack application which is used to
                  create update and delete notes date wise.
                </p>
                <div className="projects_btn_container">
                  <Button
                    href="https://notes-taker-h.herokuapp.com/"
                    target="_blank"
                    variant="secondary"
                  >
                    Live
                  </Button>
                  <Button
                    href="https://github.com/HarishMahesh/Notes-App"
                    target="_blank"
                    variant="secondary"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

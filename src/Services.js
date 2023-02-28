import React from "react";
import { Row, Col } from "react-bootstrap";
import { GoDeviceMobile, GoLightBulb } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { RiImageEditFill } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";

function Services() {
  return (
    <div className="Container about-section">
      <Row className="justify-content-md-center .about-container">
        <Col md="auto">
          <h1 className="about-heading">Services</h1>
          <div className="half-bar"></div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">
              <TbWorld
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                }}
              />
            </div>
            <h4>
              <a>Web Development</a>
            </h4>
            <p>
              Building responsive, user-friendly websites that deliver seamless
              experiences. Crafting innovative, intuitive and custom web
              solutions with cutting-edge technologies to meet your unique
              business needs.
            </p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">
              <GoDeviceMobile
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                }}
              />
            </div>
            <h4>
              <a>Mobile App Development</a>
            </h4>
            <p>
              Developing top-notch, user-friendly mobile apps for iOS and
              Android to bring your ideas to life. Developing top-notch,
              user-friendly mobile apps for iOS and Android to bring your ideas
              to life.
            </p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">
              <RiImageEditFill
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                }}
              />
            </div>
            <h4>
              <a>Graphic Designing</a>
            </h4>
            <p>
              Create striking graphics that engage and captivate your audience.
              Designing beautiful and engaging visual content that captures your
              brand's essence. Craft visually appealing designs that tell a
              compelling brand story.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">
              <BsCameraVideo
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                }}
              />
            </div>
            <h4>
              <a>Video Editing</a>
            </h4>
            <p>
              Enhance your visual storytelling with our professional video
              editing services. From cutting-edge effects to flawless
              post-production, we turn your raw footage into polished
              masterpieces that captivate and inspire.
            </p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">
              <GoLightBulb
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                }}
              />
            </div>
            <h4>
              <a>Machine Learning</a>
            </h4>
            <p>
              Utilizing powerful machine learning algorithms to gain insights
              and drive business growth. Developing intelligent systems that can
              learn from data to automate and optimize your processes and
              results.
            </p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div class="icon-box">
            <div class="icon">{/* <i class="mdi mdi"></i> */}</div>
            <h4>
              <a>Digital Marketing</a>
            </h4>
            <p>
              Strategic digital marketing solutions to boost your online
              presence and drive business growth. Results-oriented digital
              marketing campaigns that deliver measurable results and drive
              revenue.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Services;

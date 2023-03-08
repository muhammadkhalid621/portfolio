import React from "react";

import web from "./images/Web-development.png";
import app from "./images/app-development.png";
import video from "./images/video-editing.png";
import graphics from "./images/Graphic-design.png";
import machine from "./images/machine-learning.png";
import digital from "./images/digital-marketing.png";

function Services() {
  return (
    <div className="Container about-section">
      <div className="row justify-content-md-center .about-container">
        <div className="col">
          <h1 className="about-heading">Services</h1>
          <div className="half-bar"></div>
        </div>
      </div>
      <div className="row">
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={web}
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
        </div>
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={app}
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
        </div>
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={graphics}
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
        </div>
      </div>
      <div className="row">
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={video}
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
        </div>
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={machine}
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
        </div>
        <div  className="col-md-4 mb-4">
          <div className="icon-box">
            <div className="icon">
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={digital}
              />
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Services;

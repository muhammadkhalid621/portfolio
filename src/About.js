import React from "react";
import "./style.css";
import { Row, Col, Image } from "react-bootstrap";

import logo from "./images/logo.png";

import user from "./images/User-focused.png";
import efficiency from "./images/efficiency.png";
import responsive from "./images/response.png";
import versatile from "./images/versatile.png";
import security from "./images/security.png";

const About = () => {
  const skills = [
    { name: "React", value: "95%" },
    { name: "Node", value: "90%" },
    { name: "JavaScript", value: "90%" },
    { name: "Python", value: "100%" },
    { name: "Django", value: "95%" },
    { name: "HTML", value: "90%" },
    { name: "CSS", value: "80%" },
    { name: "Illustrator", value: "90%" },
    { name: "Photoshop", value: "90%" },
    { name: "Premier Pro", value: "95%" },
    { name: "After Effects", value: "90%" },
    { name: "Light Room", value: "90%" },
  ];
  return (
    <div className="Container about-section">
      <div className="row justify-content-md-center .about-container">
        <div className="col">
          <h1 className="about-heading">About Us</h1>
          <div className="half-bar"></div>
        </div>
      </div>
      <div className="row hex-row">
        <div className="col">
          <div className="hex-card">
          <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={user}
              />
          </div>
          <h2 style={{ textAlign: "center" }}>User-Focused</h2>
          <p style={{ textAlign: "center" }}>
            Providing an intuitive and seamless user experience that caters to
            their needs, designed with the end-user in mind priority.
          </p>
        </div>
        <div className="col">
          <div className="hex-card">
          <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={responsive}
              />
          </div>
          <h2 style={{ textAlign: "center" }}>Responsive</h2>
          <p style={{ textAlign: "center" }}>
            Design of application adjusts dynamically to fit various screen
            sizes and device types.
          </p>
        </div>
        <div className="col">
          <div className="hex-card">
          <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={efficiency}
              />
          </div>
          <h2 style={{ textAlign: "center" }}>Efficient</h2>
          <p style={{ textAlign: "center" }}>
            Highly efficient and optimize resource usage, providing fast and
            reliable performance.
          </p>
        </div>
        <div className="col">
          <div className="hex-card">
          <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={versatile}
              />
          </div>
          <h2 style={{ textAlign: "center" }}>Versatile</h2>
          <p style={{ textAlign: "center" }}>
            Highly flexible and customizable, able to adapt to a variety of use
            cases.
          </p>
        </div>
        <div className="col">
          <div className="hex-card">
          <img
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
                src={security}
              />
          </div>
          <h2 style={{ textAlign: "center" }}>Secure</h2>
          <p style={{ textAlign: "center" }}>
            Strong security features to protect data and prevent unauthorized
            access or attacks.
          </p>
        </div>
      </div>
      <div className="row about-container">
        <div className="col" lg={6}>
          <Image className="logo" src={logo} fluid />
          <p className="companytext">
            The <strong className="companyname">Technologist</strong> is an global IT solutions provider
            helping businesses to transform digitally. At The{" "}
            <strong className="companyname">Technologist</strong>, we are passionate about helping
            businesses build a strong online presence through effective
            advertising strategies. Our team of experts specialize in{" "}
            <strong className="companyservices">
              web development, artificial intelligence, graphic design
            </strong>
            , and <strong className="companyservices">video editing</strong> to create engaging content that
            captures the attention of your target audience.
          </p>
        </div>
        <div className="col" lg={6}>
          {skills.map((skill) => (
            <div className="progress" key={skill.name}>
              <label
                className="progress-label col-xs-3"
                style={{ fontSize: "large" }}
              >
                {" "}
                {skill.name}
              </label>
              <div
                className="progress-bar progress-bar  col-xs-9"
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: skill.value }}
              >
                {skill.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

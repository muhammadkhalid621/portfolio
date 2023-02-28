import React from "react";
import "./style.css";
import { Row, Col, Image } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

import { MdOutlinePhonelink } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { IoIosRocket } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";

import logo from "./images/logo.png";

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
      <Row className="justify-content-md-center .about-container">
        <Col md="auto">
          <h1 className="about-heading">About</h1>
          <div className="half-bar"></div>
        </Col>
      </Row>
      <Row className="hex-row">
        <Col>
          <div className="hex-card">
            <FaUserAlt
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#04c2c9",
              }}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>User-Focused</h2>
          <p style={{ textAlign: "center" }}>
            Providing an intuitive and seamless user experience that caters to
            their needs, designed with the end-user in mind priority.
          </p>
        </Col>
        <Col>
          <div className="hex-card">
            <GoLightBulb
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#04c2c9",
              }}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>Responsive</h2>
          <p style={{ textAlign: "center" }}>
            Design of application adjusts dynamically to fit various screen
            sizes and device types.
          </p>
        </Col>
        <Col>
          <div className="hex-card">
            <MdOutlinePhonelink
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#04c2c9",
              }}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>Efficient</h2>
          <p style={{ textAlign: "center" }}>
            Highly efficient and optimize resource usage, providing fast and
            reliable performance.
          </p>
        </Col>
        <Col>
          <div className="hex-card">
            <IoIosRocket
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#04c2c9",
              }}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>Versatile</h2>
          <p style={{ textAlign: "center" }}>
            Highly flexible and customizable, able to adapt to a variety of use
            cases.
          </p>
        </Col>
        <Col>
          <div className="hex-card">
            <BsShieldLock
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                backgroundColor: "#04c2c9",
              }}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>Secure</h2>
          <p style={{ textAlign: "center" }}>
            Strong security features to protect data and prevent unauthorized
            access or attacks.
          </p>
        </Col>
      </Row>
      <Row className="about-container">
        <Col lg={6}>
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
        </Col>
        <Col lg={6}>
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
        </Col>
      </Row>
    </div>
  );
};

export default About;

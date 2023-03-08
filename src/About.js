import React from "react";

import "./style.css";

import logo from "./images/logo.png";

import frontend from "./images/frontend.png";
import about from "./images/about.png";
import backend from "./images/backend.png";
import graphics from "./images/graphics.png";

const About = () => {
  return <div className="container-fluid about-section">
     <section id="about-us">
      <div class="container">
        <div class="row d-flex align-items-center">
          {/* <!-- Left Column with Heading and Text --> */}

          <div class="col-md-5">
            <img src={logo} class="img-fluid" />
          </div>
          {/* <!-- Right Column with Image --> */}
          <div class="col-md-6">
            <h1 class="heading">Who are Technologist?</h1>
            <p class="companytext">
              The <strong class="companyname">Technologist</strong> is an global
              IT solutions provider helping businesses to transform digitally.
              At The <strong class="companyname">Technologist</strong>, we are
              passionate about helping businesses build a strong online presence
              through effective advertising strategies. Our team of experts
              specialize in
              <strong class="companyservices">
                web development, artificial intelligence, graphic design
              </strong>
              , and
              <strong class="companyservices">video editing</strong> to create
              engaging content that captures the attention of your target
              audience.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col-lg-12">
        <div class="img-responsive">
          <img
            src={about}
            alt="your-image-description"
            class="img-fluid about-img"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="circle">
              <img src={frontend} alt="profile image" />
            </div>
            <h5 class="card-title">Frontend</h5>
            <ul class="points">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Vue</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="circle">
              <img src={backend} alt="profile image" />
            </div>
            <h5 class="card-title">Backend</h5>
            <ul class="points">
              <li>Python</li>
              <li>Node</li>
              <li>PHP</li>
              <li>Java</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div
          class="card"
          
        > 
          {/* <!-- <img src="graphics-bg.jpg" alt="your-image-description" class="card-img-top"> --> */}
          <div class="card-body">
            <div class="circle">
              <img src={graphics} alt="profile image" />
            </div>
            <h5 class="card-title">Graphic Designing</h5>
            <ul class="points">
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Lightroom</li>
              <li>Canva</li>
              <li>After Effects</li>
              <li>Premier Pro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default About;

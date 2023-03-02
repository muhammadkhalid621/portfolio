import React from "react";
import { Row, Col } from "react-bootstrap";

import "./style.css";

export default function Contact() {
  return (
    <div class="container contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#023047" stroke="#023047"></path>
      </svg>
      <div className="row justify-content-md-center .about-container">
        <div className="col">
          <h1 className="about-heading">Contact Us</h1>
          <div className="half-bar"></div>
        </div>
      </div>
      <div class="contact-section">
       
        <h1>Have a question or want to work together?</h1>
        <form>
          {/* <label for="fname">Full Name</label> */}
          <input type="text" id="name" name="name" placeholder="Your Name" />

          {/* <label for="lname">Email</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          {/* <label for="subject">Subject</label> */}
          <textarea
            id="subject"
            name="subject"
            placeholder="Write message"
            //   style="height:200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

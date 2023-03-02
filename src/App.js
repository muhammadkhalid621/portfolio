import React from "react";
import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavbarTop from "./Navbar";
import "./style.css";
import { MdDoubleArrow } from "react-icons/md";
import Contact from "./Contact";
import Services from "./Services";
import Portfolio from "./Portfolio";
import logo from "./images/logo-icon.png";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <div id="home">
        <HeroSection />
      </div>
      <NavbarTop />
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <a
        className="top-button"
        style={{ backgroundColor: "#219EBC", border: "none" }}
        href="#home"
        role="button"
      >
        <MdDoubleArrow
          style={{
            transform: "rotate(-90deg)",
            width: "40px",
            height: "40px",
            color: "white",
          }}
        />
      </a>

      <Footer />
    </div>
  );
}

export default App;

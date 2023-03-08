import React from "react";

import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import NavbarTop from "./Navbar";
import Services from "./Services";
import Portfolio from "./Portfolio";
import HeroSection from "./HeroSection";

import "./style.css";

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

      <Footer />
    </div>
  );
}

export default App;

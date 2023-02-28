import React, { useState, useEffect } from "react";
import "./style.css";
// import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <header>
      <div className="p-5 text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                Hello, We are The {" "}
                <strong
                  style={{
                    color: "#FFB703",
                    textTransform: 'uppercase'
                  }}
                >
                  Technologist
                </strong>
              </h1>
              <h3 className="mb-3" style={{
                textTransform: 'uppercase'
              }}>Custom software solutions with agility.</h3>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
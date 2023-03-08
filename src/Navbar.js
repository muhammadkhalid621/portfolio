import React from "react";
import logo from "./images/logo-icon.png";

import "./style.css";

function NavbarTop() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand mt-2 mt-lg-0 ms-5 ms-lg-5" href="#home">
          <img
            src={logo}
            height="40"
            width="40"
            alt="Technologist Logo"
            loading="lazy"
          />
          TECHNOLOGIST
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;

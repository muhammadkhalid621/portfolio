import React from "react";

import "./style.css";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container footer">
        <div className="mb-5 text-center icons">
          <a href="https://www.linkedin.com/company/thetechnologist-net/" target="_blank" className="text-white me-4 footer-icon">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/muhammadkhalid621/" target="_blank" className="text-white me-4 footer-icon">
            <img src={github} />
          </a>
          <a href="https://twitter.com/Technologist06" target="_blank" className="text-white me-4 footer-icon">
            <img src={twitter} />
          </a>
          <a href="https://www.facebook.com/thetechnologist.net/" target="_blank" className="text-white me-4 footer-icon">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com/thetechnologist06/" target="_blank" className="text-white me-4 footer-icon">
            <img src={instagram} />
          </a>
        </div>
      </div>
      <div className="text-center">© 2023 Copyright: All Right Reserved</div>
    </footer>
  );
}

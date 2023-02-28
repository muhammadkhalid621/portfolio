import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import "./style.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container footer">
        <div className="mb-5 text-center icons">
          <a href="#" className="text-white me-4 icon">
            <BsLinkedin style={{ height: "40px", width: "40px" }} />
          </a>
          <a href="#" className="text-white me-4 icon">
            <BsGithub style={{ height: "40px", width: "40px" }} />
          </a>
          <a href="#" className="text-white me-4 icon">
            <FaFacebookSquare style={{ height: "40px", width: "40px" }} />
          </a>
          <a href="#" className="text-white me-4 icon">
            <BsInstagram style={{ height: "40px", width: "40px" }} />
          </a>
        </div>
      </div>
      <div class="text-center">© 2023 Copyright: All Right Reserved</div>
    </footer>
  );
}

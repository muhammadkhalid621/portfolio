import React, { useState } from "react";

import ashar0 from "./images/ashar-0.jpg";
import ashar1 from "./images/ashar-1.jpg";
import ashar2 from "./images/ashar-2.jpg";
import lush0 from "./images/lush-0.jpg";
import lush1 from "./images/lush-1.jpg";
import lush2 from "./images/lush-2.jpg";
import logo0 from "./images/logo-0.png";
import logo1 from "./images/logo-1.png";
import logo2 from "./images/logo-2.png";
import rover0 from "./images/rover-0.jpeg";
import rover1 from "./images/rover-1.jpeg";
import rover2 from "./images/rover-2.jpeg";
import rover3 from "./images/rover-3.jpeg";
import rover4 from "./images/rover-4.jpeg";
import rover5 from "./images/rover-5.jpeg";
import rover6 from "./images/rover-6.jpeg";
import web1 from "./images/web1.jpeg";
import web2 from "./images/web2.jpeg";
import web3 from "./images/web3.jpeg";
import mobile from "./images/mobile.jpeg";
import sike1 from "./images/sike-02.jpeg";
import sike2 from "./images/sike-05.jpeg";
import sike3 from "./images/sike-06.jpeg";
import video1 from "./images/video1.png";
import Cinematic from "./images/color-grading.mp4";
import user0 from "./images/user-0.jpeg";
import user1 from "./images/user-1.jpeg";
import user2 from "./images/user-2.jpeg";
import login0 from "./images/login-0.png";
import login1 from "./images/login-1.jpeg";
import login2 from "./images/login-2.jpeg";
import login3 from "./images/login-3.jpeg";
import sms0 from "./images/sms-0.png";
import sms1 from "./images/sms-1.png";
import sms2 from "./images/sms-2.png";
import sms3 from "./images/sms-3.png";
import sms4 from "./images/sms-4.png";
import sms5 from "./images/sms-5.png";
import sms from "./images/sms.jpg";
import tempelate from "./images/tempelate.jpg";
import tempelate0 from "./images/tempelate-0.png";
import tempelate1 from "./images/tempelate-1.png";
import tempelate2 from "./images/tempelate-2.png";
import tempelate3 from "./images/tempelate-3.png";
import admin0 from "./images/admin-0.png";
import admin1 from "./images/admin-1.png";
import admin2 from "./images/admin-2.png";
import admin3 from "./images/admin-3.jpeg";

import "./style.css";

export default function Portfolio() {
  const [imageData, setImageData] = useState({
    images: [],
    title: "",
    description: "",
  });
  // Get the video modal element
  const videoStart = () => {
    const videoModal = document.getElementById("videoModal");

    // Get the video player element
    const videoPlayer = document.getElementById("videoPlayer");

    // Add an event listener to the modal's close button
    videoModal.querySelector(".btn-close").addEventListener("click", () => {
      // Pause the video playback
      videoPlayer.currentTime = 0;
      videoPlayer.pause();
    });
  };

  const setData = (images, title, description = "") => {
    setImageData({
      images,
      title,
      description,
    });
  };
  return (
    <div className="about-section">
      <div className="row justify-content-md-center .about-container">
        <div className="col">
          <h1 className="about-heading">Portfolio</h1>
          <div className="half-bar"></div>
        </div>
      </div>
      <ul className="m-4 nav nav-pills nav-justified nav-fill" id="myTab">
        <li className="nav-item">
          <a href="#all" className="nav-link active" data-bs-toggle="tab">
            ALL
          </a>
        </li>
        <li className="nav-item">
          <a href="#web" className="nav-link" data-bs-toggle="tab">
            WEB
          </a>
        </li>
        <li className="nav-item">
          <a href="#mobile" className="nav-link" data-bs-toggle="tab">
            MOBILE
          </a>
        </li>
        <li className="nav-item">
          <a href="#video" className="nav-link" data-bs-toggle="tab">
            VIDEO
          </a>
        </li>
        <li className="nav-item">
          <a href="#graphics" className="nav-link" data-bs-toggle="tab">
            GRAPHIC
          </a>
        </li>
        <li className="nav-item">
          <a href="#logo" className="nav-link" data-bs-toggle="tab">
            LOGO
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active " id="all">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src={web1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Authentication App</h2>
                  <p>React Js/Node Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: login0, alt: "login0" },
                          { src: login1, alt: "login1" },
                          { src: login2, alt: "login2" },
                          { src: login3, alt: "login3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>

              <div className="image-container">
                <img
                  src={web2}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Sentiment Analysis User Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: user0, alt: "user0" },
                          { src: user1, alt: "user1" },
                          { src: user2, alt: "user2" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={ashar0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Ashar Pakistan</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: ashar0, alt: "ashar0" },
                          { src: ashar1, alt: "ashar1" },
                          { src: ashar2, alt: "ashar2" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              {/* <div className="image-container">
                <img
                  src={tempelate}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>React Template App</h2>
                  <p>React Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: tempelate0, alt: "tempelate0" },
                          { src: tempelate1, alt: "tempelate1" },
                          { src: tempelate2, alt: "tempelate2" },
                          { src: tempelate3, alt: "tempelate3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div> */}
              <div className="image-container">
                <img
                  src={sms}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>School Managment System</h2>
                  <p>React Js/Node Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: sms0, alt: "sms0" },
                          { src: sms1, alt: "sms1" },
                          { src: sms2, alt: "sms2" },
                          { src: sms3, alt: "sms3" },
                          { src: sms4, alt: "sms4" },
                          { src: sms5, alt: "sms5" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src={rover0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Rover Pakistan</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: rover0, alt: "rover0" },
                          { src: rover1, alt: "rover1" },
                          { src: rover2, alt: "rover2" },
                          { src: rover3, alt: "rover3" },
                          { src: rover4, alt: "rover4" },
                          { src: rover5, alt: "rover5" },
                          { src: rover6, alt: "rover6" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={web3}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Sentiment Analysis Admin Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: admin0, alt: "admin0" },
                          { src: admin1, alt: "admin1" },
                          { src: admin2, alt: "admin2" },
                          { src: admin3, alt: "admin3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={video1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Video Editing</h2>
                  <p>Cinematic Color Grading</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    onClick={videoStart}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src={mobile}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>SIKE</h2>
                  <p>React Native/Python(Flask)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: sike1, alt: "sike1" },
                          { src: sike2, alt: "sike2" },
                          { src: sike3, alt: "ashar3" },
                        ],
                        "SIKE"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={lush0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Lush Cafe</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: lush0, alt: "lush0" },
                          { src: lush1, alt: "lush1" },
                          { src: lush2, alt: "lush2" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>

              <div className="image-container">
                <img
                  src={logo0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: logo0, alt: "logo0" },
                          { src: logo1, alt: "logo1" },
                          { src: logo2, alt: "logo2" },
                        ],
                        "LOGO"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="web">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={sms}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>School Managment System</h2>
                  <p>React Js/Node Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: sms0, alt: "sms0" },
                          { src: sms1, alt: "sms1" },
                          { src: sms2, alt: "sms2" },
                          { src: sms3, alt: "sms3" },
                          { src: sms4, alt: "sms4" },
                          { src: sms5, alt: "sms5" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={tempelate}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>React Template App</h2>
                  <p>React Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: tempelate0, alt: "tempelate0" },
                          { src: tempelate1, alt: "tempelate1" },
                          { src: tempelate2, alt: "tempelate2" },
                          { src: tempelate3, alt: "tempelate3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div> */}

            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={web1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Authentication App</h2>
                  <p>React Js/Node Js</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: login0, alt: "login0" },
                          { src: login1, alt: "login1" },
                          { src: login2, alt: "login2" },
                          { src: login3, alt: "login3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={web3}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Sentiment Analysis Admin Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: admin0, alt: "admin0" },
                          { src: admin1, alt: "admin1" },
                          { src: admin2, alt: "admin2" },
                          { src: admin3, alt: "admin3" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={web2}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Sentiment Analysis User Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: user0, alt: "user0" },
                          { src: user1, alt: "user1" },
                          { src: user2, alt: "user2" },
                        ],
                        "WEB"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="mobile">
          <div className="row ">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={mobile}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>SIKE</h2>
                  <p>React Native/Python(Flask)</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: sike1, alt: "sike1" },
                          { src: sike2, alt: "sike2" },
                          { src: sike3, alt: "sike3" },
                        ],
                        "SIKE"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade show" id="video">
          <div className="row ">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={video1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>Video Editing</h2>
                  <p>Cinematic Color Grading</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    onClick={videoStart}
                  >
                    Watch Video
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-primary video-btn"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/NFWSFbqL0A0"
                    data-target="#myModal"
                    disabled
                  >
                    Watch Video
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="graphics">
          <div className="row ">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={ashar0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Ashar Pakistan</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: ashar0, alt: "ashar0" },
                          { src: ashar1, alt: "ashar1" },
                          { src: ashar2, alt: "ashar2" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={lush0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Lush Cafe</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: lush0, alt: "lush0" },
                          { src: lush1, alt: "lush1" },
                          { src: lush2, alt: "lush2" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={rover0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>POSTER</h2>
                  <p>Rover Pakistan</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(
                        [
                          { src: rover0, alt: "rover0" },
                          { src: rover1, alt: "rover1" },
                          { src: rover2, alt: "rover2" },
                          { src: rover3, alt: "rover3" },
                          { src: rover4, alt: "rover4" },
                          { src: rover5, alt: "rover5" },
                          { src: rover6, alt: "rover6" },
                        ],
                        "POSTER"
                      );
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="logo">
          <div className="row ">
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={logo0}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData([{ src: logo0, alt: "logo0" }], "LOGO");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={logo1}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData([{ src: logo1, alt: "logo1" }], "LOGO");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="image-container">
                <img
                  src={logo2}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div className="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData([{ src: logo2, alt: "logo2" }], "LOGO");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image modal */}
      <div
        className="modal "
        id="carouselModal"
        tabIndex="-1"
        aria-labelledby="carouselModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="carouselModalLabel">
                {imageData.title}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
                // style={{
                //   objectFit: "contain",
                //   objectPosition: "center",
                //   overflow: "hidden",
                //   height: "90vh",
                // }}
              >
                <p>{imageData.description}</p>
                <div className="carousel-inner">
                  {/* <div className="carousel-item active">
                    <img src={imageData.img1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div> */}
                  {imageData.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    >
                      <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    style={{ color: "black" }}
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Cinematic Color Grading Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <video className="img-fluid" id="videoPlayer" controls>
                <source src={Cinematic} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

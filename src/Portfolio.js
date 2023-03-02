import React, { useState } from "react";
import ModalVideo from "react-modal-video";

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
import web1 from "./images/web1.jpeg";
import web2 from "./images/web2.jpeg";
import web3 from "./images/web3.jpeg";
import mobile from "./images/mobile.jpeg";
import sike1 from "./images/sike-02.jpeg";
import sike2 from "./images/sike-05.jpeg";
import sike3 from "./images/sike-06.jpeg";
import video1 from "./images/video1.png";
import Cinematic from "./images/Cinematic Color Grading.mp4";

import "./style.css";
// import Modal from "./Components/Modal";

export default function Portfolio() {
  const [imageData, setImageData] = useState({});
  const [isOpen, setOpen] = useState(false);

  const setData = (img1, img2, img3, title, description = "") => {
    setImageData({
      img1,
      img2,
      img3,
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
      <ul class="m-4 nav nav-pills nav-justified nav-fill" id="myTab">
        <li class="nav-item">
          <a href="#all" class="nav-link active" data-bs-toggle="tab" >
            ALL
          </a>
        </li>
        <li class="nav-item">
          <a href="#web" class="nav-link" data-bs-toggle="tab">
            WEB
          </a>
        </li>
        <li class="nav-item">
          <a href="#mobile" class="nav-link" data-bs-toggle="tab">
            MOBILE
          </a>
        </li>
        <li class="nav-item">
          <a href="#video" class="nav-link" data-bs-toggle="tab">
            VIDEO
          </a>
        </li>
        <li class="nav-item">
          <a href="#graphics" class="nav-link" data-bs-toggle="tab">
            GRAPHIC
          </a>
        </li>
        <li class="nav-item">
          <a href="#logo" class="nav-link" data-bs-toggle="tab">
            LOGO
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade show active " id="all">
          <div className="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div class="image-container">
                <img
                  src={web1}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Authentication App</h2>
                  <p>React Js/Node Js</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>

              <div class="image-container">
                <img
                  src={web2}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Sentiment Analysis User Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div class="image-container">
                <img
                  src={ashar0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Ashar Pakistan</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(ashar0, ashar1, ashar2, "POSTER");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div class="image-container">
                <img
                  src={rover0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Rover Pakistan</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(rover0, rover1, rover2, "POSTER");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div class="image-container">
                <img
                  src={web3}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Sentiment Analysis Admin Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div class="image-container">
                <img
                  src={video1}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Video Editing</h2>
                  <p>Cinematic Color Grading</p>

                  <button
                    type="button"
                    class="btn btn-primary video-btn"
                    // data-toggle="modal"
                    // data-src="https://www.youtube.com/embed/NFWSFbqL0A0"
                    // data-target="#myModal"
                    // onClick={() => setOpen(true)}
                    disabled
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div class="image-container">
                <img
                  src={mobile}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>SIKE</h2>
                  <p>React Native/Python(Flask)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(sike1, sike2, sike3, "SIKE");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
              <div class="image-container">
                <img
                  src={lush0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Lush Cafe</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(lush0, lush1, lush2, "POSTER");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>

              <div class="image-container">
                <img
                  src={logo0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(logo0, logo1, logo2, "LOGO");
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
        <div class="tab-pane fade" id="web">
          <div class="row ">
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={web2}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Sentiment Analysis User Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={web1}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Sentiment Analysis Admin Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={web3}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Sentiment Analysis Admin Pannel</h2>
                  <p>React Js/Python(Django)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="mobile">
          <div class="row ">
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={mobile}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>SIKE</h2>
                  <p>React Native/Python(Flask)</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(sike1, sike2, sike3, "SIKE");
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
        <div class="tab-pane fade show" id="video">
          <div class="row ">
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={video1}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>Video Editing</h2>
                  <p>Cinematic Color Grading</p>

                  <button
                    type="button"
                    class="btn btn-primary video-btn"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/NFWSFbqL0A0"
                    data-target="#myModal"
                    disabled
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="graphics">
          <div class="row ">
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={ashar0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Ashar Pakistan</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(ashar0, ashar1, ashar2, "POSTER");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={lush0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Lush Cafe</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(lush0, lush1, lush2, "POSTER");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={rover0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>POSTER</h2>
                  <p>Rover Pakistan</p>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(rover0, rover1, rover2, "POSTER");
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
        <div class="tab-pane fade" id="logo">
          <div class="row ">
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={logo0}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(logo0, logo1, logo2, "LOGO");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={logo1}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(logo0, logo1, logo2, "LOGO");
                    }}
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="image-container">
                <img
                  src={logo2}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
                <div class="overlay">
                  <h2>LOGO</h2>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#carouselModal"
                    onClick={() => {
                      setData(logo0, logo1, logo2, "LOGO");
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
        class="modal "
        id="carouselModal"
        tabindex="-1"
        aria-labelledby="carouselModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="carouselModalLabel">
                {imageData.title}
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExample"
                class="carousel slide"
                data-bs-ride="carousel"
                // style={{
                //   objectFit: "contain",
                //   objectPosition: "center",
                //   overflow: "hidden",
                //   height: "90vh",
                // }}
              >
                <p>{imageData.description}</p>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={imageData.img1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div class="carousel-item">
                    <img src={imageData.img2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div class="carousel-item">
                    <img src={imageData.img3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block"></div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video modal
      <ModalVideo
        // width="90%"
        // height="calc(90vh - 90px)"
        url={Cinematic}
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
}

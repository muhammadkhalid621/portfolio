import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isEmail, setisEmail] = useState(false);
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const findErrors = () => {
    const newErrors = {};

    if (!name || name === "") newErrors.name = "Name is Required";

    if (!email || email === "") newErrors.email = "Email is Required";
    else if (!regexp.test(email)) newErrors.email = "Invalid Email";

    if (!message || message === "") newErrors.message = "Message is Required";

    return newErrors;
  };
  const onSubmit = (e) => {
    setisEmail(false);
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setisEmail(false);
    } else {
      setErrors({});
      try {
        const payload = {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID,
          user_id: process.env.REACT_APP_PUBLIC_KEY, //this includes a dash that is part of my key
          template_params: {
            name: formData.name,
            to_name: "muhammadkhalid621@gmail.com",
            message: formData.email + " " + formData.message,
          },
        };
        const headers = { "Content-Type": "application/json" };
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        })
          .then((res) => {
            setisEmail(true);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          })
          .catch((err) => setisEmail(false));
      } catch (e) {
        setisEmail(false);
      }
    }
  };
  return (
    <div className="container contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#023047" stroke="#023047"></path>
      </svg>
      <div className="row justify-content-md-center .about-container">
        <div className="col">
          <h1 className="about-heading">Contact Us</h1>
          <div className="half-bar"></div>
        </div>
      </div>
      <div className="contact-section col-md-5">
        <h1>Have a question or want to work together?</h1>
        <form onSubmit={onSubmit}>
          {/* <label for="fname">Full Name</label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name || ""}
            onChange={(e) => onChange(e)}
          />

          {errors.name && <p className="errorShow">{errors.name}</p>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email || ""}
            onChange={(e) => onChange(e)}
          />

          {errors.email && <p className="errorShow">{errors.email}</p>}
          <textarea
            id="message"
            name="message"
            placeholder="Write message"
            value={message || ""}
            onChange={(e) => onChange(e)}
          ></textarea>
          {errors.message && <p className="errorShow">{errors.message}</p>}
          {isEmail && <p className="success">Email Sent</p>}
          <input type="submit" value="Submit" />
          
        </form>
      </div>
    </div>
  );
}

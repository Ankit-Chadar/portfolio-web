import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <>
      <div className="container contact" id="contact"></div>
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.google.com" className="items">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.google.com" className="items">
          <CiFacebook className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-chadar-924879200/"
          className="items"
        >
          <CiLinkedin className="icon" />
        </a>
        <a href="https://www.google.com" className="items">
          <FaSquareXTwitter className="icon" />
        </a>
        <a href="https://github.com/Ankit-Chadar" className="items">
          <FaGithub className="icon" />
        </a>
        <a href="mailto:ankitchadar1059@gmail.com" className="items">
          <SiGmail className="icon" />
        </a>
      </div>
    </>
  );
};

export default Contacts;

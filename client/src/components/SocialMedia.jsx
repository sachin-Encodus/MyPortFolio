import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/sachin-Encodus">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/sachin-chauhan-18037a1b7/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sachinchauhan.__/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

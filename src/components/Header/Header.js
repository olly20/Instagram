import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/logo_instagram.png";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <img src={logo} alt="Logo" />
      </div>

      <div className="Search">
        <input type="text" />
      </div>
      <div className="Icons">
        <FontAwesomeIcon icon={faCompass} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </div>
  );
}

export default Header;

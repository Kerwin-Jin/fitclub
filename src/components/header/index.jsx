import React from "react";
import Logo from "../../assets/logo.png";
import "./index.css";

const Header = (props) => {
  return (
    <div className="header">
      <img src={Logo} alt="test" className="logo" />

      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;

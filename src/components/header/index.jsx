import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./index.css";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;

  const openMenu = () => [setMenuOpen(true)];
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="header">
      <img src={Logo} alt="test" className="logo" />

      {mobile && !menuOpen ? (
        <img src={Bars} alt="" onClick={openMenu} />
      ) : (
        <ul className="header-menu">
          <Link
            onClick={closeMenu}
            to={"home"}
            smooth={true}
            span={true}
            className={"link"}
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            to={"programs"}
            smooth={true}
            span={true}
            className={"link"}
          >
            Programs
          </Link>
          <Link
            onClick={closeMenu}
            to={"resaon"}
            smooth={true}
            span={true}
            className={"link"}
          >
            Why us
          </Link>
          <Link
            onClick={closeMenu}
            to={"plans"}
            smooth={true}
            span={true}
            className={"link"}
          >
            Plans
          </Link>
          <Link
            onClick={closeMenu}
            to={"testimonials"}
            smooth={true}
            span={true}
            className={"link"}
          >
            Testimonials
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;

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
            首页
          </Link>
          <Link
            onClick={closeMenu}
            to={"programs"}
            smooth={true}
            span={true}
            className={"link"}
          >
            课程
          </Link>
          <Link
            onClick={closeMenu}
            to={"resaon"}
            smooth={true}
            span={true}
            className={"link"}
          >
            优势
          </Link>
          <Link
            onClick={closeMenu}
            to={"plans"}
            smooth={true}
            span={true}
            className={"link"}
          >
            价格
          </Link>
          <Link
            onClick={closeMenu}
            to={"testimonials"}
            smooth={true}
            span={true}
            className={"link"}
          >
            评价
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;

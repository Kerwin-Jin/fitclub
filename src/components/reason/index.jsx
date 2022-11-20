import React from "react";
import "./index.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";

import Adidas from "../../assets/adidas.png";
import NB from "../../assets/nb.png";
import Nike from "../../assets/nike.png";
const Reason = () => {
  return (
    <div className="reason" id="resaon">
      <div className="left">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className="right">
        <div>some reasons</div>
        <div>
          <span className="stroke-text">why</span> <span>choose us?</span>
        </div>
        <ul>
          <li>over 149+ expert coachs</li>
          <li>train smarter and faster than before</li>
          <li>1 free program for new member</li>
          <li>reliable partners</li>
        </ul>
        <div className="partners">
          <div>our partners</div>
          <div className="brand">
            <img src={NB} alt="" />
            <img src={Adidas} alt="" />
            <img src={Nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;

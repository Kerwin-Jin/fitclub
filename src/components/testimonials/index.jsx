import { useState } from "react";
import "./index.css";
import { testimonialsData } from "../../data/testimonialsData";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
const Testimonials = () => {
  const [select, setSelect] = useState(0);

  const clickLeft = () => {
    if (select === 0) {
      setSelect(testimonialsData.length - 1);
    } else {
      setSelect((pre) => pre - 1);
    }
  };

  const clickRight = () => {
    if (select === testimonialsData.length - 1) {
      setSelect(0);
    } else {
      setSelect((pre) => pre + 1);
    }
  };

  return (
    <div className="testimonials-wrap">
      <div className="left-t">
        <div>testimonials</div>
        <div className="stroke-text">what they</div>
        <div>say about us</div>
        <div>{testimonialsData[select].review}</div>
        <div>
          <span>{testimonialsData[select].name}</span>-
          <span>{testimonialsData[select].status}</span>
        </div>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <div>
          <img src={testimonialsData[select].image} alt="" />
        </div>
        <div className="arrow">
          <img src={LeftArrow} alt="" onClick={clickLeft} />
          <img src={RightArrow} alt="" onClick={clickRight} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

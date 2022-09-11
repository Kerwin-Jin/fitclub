import React from "react";
import "./index.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div id="programs" className="programs">
      <div className="programs-header">
        <span className="stroke-text">Expore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Sharp You</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;

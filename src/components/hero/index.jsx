import React from "react";
import Header from "../header";
import "./index.css";

import Heart from "../../assets/heart.png";
import HeroBack from "../../assets/hero_image_back.png";
import HeroImg from "../../assets/hero_image.png";
import CaloriesImg from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left">
        <Header />
        {/* Hero Ad */}
        <div className="best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{
              type: "tween",
              duration: 3,
            }}
          ></motion.div>
          <span>The Besh Fitness Club in The Town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Sharp</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to sharp and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Export coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Part */}
      <div className="right">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{
            type: "spring",
            duration: 3,
          }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <motion.img
          src={HeroBack}
          className="hero-back"
          initial={{ right: "16rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ type: "tween", duration: "2" }}
        />
        <img src={HeroImg} alt="" className="hero-image" />

        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ type: "tween", duration: 2 }}
        >
          <img src={CaloriesImg} alt="" />
          <div>
            <span>Calories Bured</span>
            <span>201 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

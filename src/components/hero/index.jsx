import React from "react";
import Header from "../header";
import "./index.css";

import Heart from "../../assets/heart.png";
import HeroBack from "../../assets/hero_image_back.png";
import HeroImg from "../../assets/hero_image.png";
import CaloriesImg from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = (props) => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left">
        <Header />
        {/* Hero Ad */}
        <div className="best-ad">
          <motion.div
            initial={{ left: !mobile ? "238px" : "165px" }}
            whileInView={{ left: "8px" }}
            transition={{
              type: "tween",
              duration: 1,
            }}
          ></motion.div>
          <span>即刻运动</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">塑造 </span>
            <span>你的</span>
          </div>
          <div>
            <span>理想身材</span>
          </div>
          <div>
            <span>
              在这里，我们将会帮助你塑造你的理想身材并提高你的健康状态
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>专业教练</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay={4} preFix="+" />
            </span>
            <span>加入会员</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay={2} preFix="+" />
            </span>
            <span>健身课程</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">从这里开始</button>
          <button className="btn">了解更多</button>
        </div>
      </div>

      {/* Right Part */}
      <div className="right">
        <button className="btn">现在加入</button>

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
          <span>心率</span>
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
            <span>已燃烧卡路里</span>
            <span>201 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import "./index.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-wrap">
      <hr />
      <div className="social-link">
        <img src={Github} alt="" srcset="" />
        <img src={Instagram} alt="" srcset="" />
        <img src={Linkedin} alt="" srcset="" />
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="blur footer-blur-l"></div>
      <div className="blur footer-blur-r"></div>
    </div>
  );
};

export default Footer;

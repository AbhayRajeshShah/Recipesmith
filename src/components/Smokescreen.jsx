import "./Smokescreen.scss";
import Navbar from "./Navbar";
import img1 from "../images/smoke.png";

const SmokeScreen = ({ text1, text2, link }) => {
  return (
    <div
      className="smokescreen"
      style={{ backgroundImage: `url(${img1})`, transition: "all 1s" }}
    >
      <div className="opacity">
        <Navbar link={link} color="white" />
        <div className="hero_text" data-aos="fade-right">
          <p className="title">Instant Recipes, Meal Plans & Much More</p>
          <p className="sub-title">
            Sign up so we can send you a notification as soon as we launch
          </p>
          <div>
            <input type="text" placeholder="Enter Email" />
            <button className="action">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmokeScreen;

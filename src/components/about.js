import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/imgBanner2.png";
import "./css/bannerAbout.css";

const About = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="banner" />
      <Link to={`/`}></Link>
    </div>
  );
};

export default About;

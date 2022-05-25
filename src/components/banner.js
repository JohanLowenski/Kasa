import React from "react";
import "./css/banner.css";
import BannerImg from "../assets/imgBanner.png";

export default function Banner() {
  return (
    <div className="banner">
      <img src={BannerImg} alt="banner" />
      <span>Chez vous, partout et ailleurs</span>
    </div>
  );
}

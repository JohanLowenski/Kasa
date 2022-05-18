import React from "react";
import "./css/banner.css";
import BannerImg from "./bannerImg.svg";

export default function Banner() {
  return (
    <div className="banner">
      {<img src={BannerImg} alt="BannerImg" />}
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

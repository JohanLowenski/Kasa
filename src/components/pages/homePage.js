import React from "react";
import Banner from "../banner.js";
import Card from "../card.js";
import { appartements } from "../appartements.js";
import BannerImg from "../../assets/imgBanner.png";

const homePage = () => {
  return (
    <div>
      <Banner img={BannerImg} title="Chez vous, partout et ailleurs" />
      <div className="container">
        {appartements.map((appartement) => (
          <Card appartement={appartement} />
        ))}
      </div>
    </div>
  );
};
export default homePage;

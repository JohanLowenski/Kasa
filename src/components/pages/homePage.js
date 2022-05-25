import React from "react";
import Banner from "../banner.js";
import Card from "../card.js";
import { appartements } from "../appartements.js";

const homePage = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        {appartements.map((appartement) => (
          <Card appartement={appartement} />
        ))}
      </div>
    </div>
  );
};
export default homePage;

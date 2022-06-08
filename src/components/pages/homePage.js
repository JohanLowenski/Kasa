import React, { useEffect, useState } from "react";
import Banner from "../banner.js";
import Card from "../card.js";
import BannerImg from "../../assets/imgBanner.png";

function HomePage() {
  const [appartements, setAppartements] = useState([]);
  useEffect(() => {
    fetch("/appt.json")
      .then((res) => res.json())
      .then((data) => setAppartements(data));
  }, []);
  return (
    <div>
      <Banner img={BannerImg} title="Chez vous, partout et ailleurs" />
      <div className="container">
        {appartements.map((appartement, index) => (
          <Card key={index} appartement={appartement} />
        ))}
      </div>
    </div>
  );
}
export default HomePage;

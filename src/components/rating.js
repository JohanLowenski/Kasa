import React from "react";
import "./css/rating.css";
import StarOff from "../assets/starOff.png";
import StarOn from "../assets/starOn.png";
const rating = (props) => {
  const stars = [];
  const rating = Number(props.rating);
  for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} className="star" src={rating > i ? StarOn : StarOff} alt="Stars" />);
  }

  return <div>{stars}</div>;
};

export default rating;

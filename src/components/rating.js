/**
 * It takes a rating prop, and returns a div with 5 images, each of which is either a starOn or starOff
 * image, depending on the rating prop.
 * @param props - {
 * @returns An array of 5 images.
 */
import React from "react";
import "./css/rating.css";
import StarOff from "../assets/starOff.png";
import StarOn from "../assets/starOn.png";

const Rating = (props) => {
  return [...Array(5)].map((_, i) => {
    const star = i < Number(props.rating) ? StarOn : StarOff;
    return <img key={i} className="star" src={star} alt="Stars" />;
  });
};

export default Rating;

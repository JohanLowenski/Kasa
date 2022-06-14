/**
 * It's a function that returns a div with an image and a span.
 * @param props - {
 * @returns A function that returns a div with an image and a span.
 */
import React from "react";
import "./css/banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="imgBanner" src={props.img} alt="banner" />
      <span>{props.title}</span>
    </div>
  );
};
export default Banner;

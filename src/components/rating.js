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
// function rating(props) {
//   const stars = [];
//   const rating = Number(props.rating);
//   for (let i = 0; i < 5; i++) {
//     stars.push(<img key={i} className="star" src={rating > i ? StarOn : StarOff} alt="Stars" />);
//   }

//   return <div>{stars}</div>;
// }

// export default rating;

// const Rating = (props) => {
//   [...Array(5)].map((_, i) => {
//     const star = i < Number(props.rating) ? StarOn : StarOff;
//     return <img key={i} className="star" src={star} alt="Stars" />;
//   });
// };
// export default Rating;

const Rating = (props) => {
  [...Array(5)].map((_, i) => {
    const star = i < Number(props.rating) ? StarOn : StarOff;
    return <img key={i} className="star" src={star} alt="Stars" />;
  });
};

export default Rating;

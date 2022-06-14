import React, { useState } from "react";
import ChevronImg from "../assets/Chevron.png";

const SlideShow = (props) => {
  const [index, setIndex] = useState(0);
  const OnChange = (direction) => {
    if (direction === "+") {
      if (index < props.pictures.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(props.pictures.length - 1);
      }
    }
  };
  return (
    <div className="logement-img">
      <img className="Carousel" src={props.pictures[index]} alt="props" />
      <span className="btn-reserver-prev">
        <img className="prev" src={ChevronImg} alt="Prev" onClick={() => OnChange("-")} />
      </span>
      <span className="btn-reserver-next">
        <img className="next" src={ChevronImg} alt="Next" onClick={() => OnChange("+")} />
      </span>
      <span className="countNumber">
        <p>
          {index + 1}/{props.pictures.length}
        </p>
      </span>
    </div>
  );
};
export default SlideShow;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/logement.css";
import { appartements } from "../appartements";
import ChevronImg from "../../assets/Chevron.png";

function Logement() {
  const params = useParams();
  const appartement = appartements.find((apt) => apt.id === params.id);
  const [index, setIndex] = useState(0);
  function OnChange(direction) {
    if (direction === "+") {
      if (index < appartement.pictures.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(appartement.pictures.length - 1);
      }
    }
  }
  return (
    <div className="logement">
      <div className="logement-content">
        <div className="logement-img">
          <img className="Carousel" src={appartement.pictures[index]} alt="appartement" />
          <span className="btn-reserver-prev">
            <img className="prev" src={ChevronImg} alt="Prev" onClick={() => OnChange("-")} />
          </span>
          <span className="btn-reserver-next">
            <img className="next" src={ChevronImg} alt="Next" onClick={() => OnChange("+")} />
          </span>
          <span className="countNumber">
            <p>
              {index + 1}/{appartement.pictures.length}
            </p>
          </span>
        </div>
        <div className="logement-title">{appartement.title}</div>
        <div className="logement-price">{appartement.location}</div>
      </div>
    </div>
  );
}
export default Logement;

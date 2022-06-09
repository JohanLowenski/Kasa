/**
 * It fetches data from a json file, then it sets the state of the appartement to the data fetched from
 * the json file.
 * @returns a JSX element.
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/logement.css";
import ChevronImg from "../../assets/Chevron.png";
import Dropdown from "../dropdown";
import Tag from "../tag";
import List from "../list";
import Rating from "../rating";

function Logement() {
  const apptModel = {
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    equipments: [],
    host: {
      name: "",
      picture: "",
    },
    rating: "",
    tags: [],
    location: "",
  };
  const params = useParams();
  const [appartement, setAppartements] = useState(apptModel);
  useEffect(() => {
    fetch("/appt.json")
      .then((res) => res.json())
      .then((data) => setAppartements(data.find((appt) => appt.id === params.id)));
  }, [params.id]);
  // const appartement = appartements.find((apt) => apt.id === params.id);
  /* It redirects the user to the 404 page if the appartement is not found. */
  if (!appartement) {
    window.location.href = "/404";
  }
  const [index, setIndex] = useState(0);
  const hostName = appartement.host.name.split(" ");
  /**
   * If the direction is "+" and the index is less than the length of the pictures array, then increment
   * the index by 1. If the index is not less than the length of the pictures array, then set the index
   * to 0. If the direction is not "+" and the index is greater than 0, then decrement the index by 1. If
   * the index is not greater than 0, then set the index to the length of the pictures array minus 1.
   * @param direction - "+" or "-"
   */
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
      <div className="logement-info">
        <div className="logement-info-title">
          <h1 className="logement-title">{appartement.title}</h1>
          <p className="logement-location">{appartement.location}</p>
          <Tag tags={appartement.tags} />
        </div>
        <div className="logement-host">
          <div className="host">
            <p className="host-name">
              {hostName[0]}
              <br />
              {hostName[1]}
            </p>
            <img className="host-picture" src={appartement.host.picture} alt="Propriétaire" />
          </div>
          <div className="rating">
            <Rating key={index} rating={appartement.rating} />
          </div>
        </div>
      </div>
      <div className="descEquip">
        <Dropdown title="Description" description={appartement.description} open={true} />
        <Dropdown title="Équipements" description={<List list={appartement.equipments} />} open={true} />
      </div>
    </div>
  );
}
export default Logement;

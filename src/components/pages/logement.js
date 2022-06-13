import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/logement.css";
// import ChevronImg from "../../assets/Chevron.png";
import Dropdown from "../dropdown";
import Tag from "../tag";
import List from "../list";
// import Rating from "../rating";
import StarOff from "../../assets/starOff.png";
import StarOn from "../../assets/starOn.png";
import SlideShow from "../slideshow";
const Logement = () => {
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
  if (!appartement) {
    window.location.href = "/404";
  }
  const hostName = appartement.host.name.split(" ");

  return (
    <div className="logement">
      <SlideShow appartement={appartement.pictures} />
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
            {[...Array(5)].map((_, i) => {
              const star = i < Number(appartement.rating) ? StarOn : StarOff;
              return <img key={i} className="star" src={star} alt="Stars" />;
            })}
            {/* <Rating key={index} rating={appartement.rating} /> */}
          </div>
        </div>
      </div>
      <div className="descEquip">
        <Dropdown title="Description" description={appartement.description} open={true} />
        <Dropdown title="Équipements" description={<List list={appartement.equipments} />} open={true} />
      </div>
    </div>
  );
};
export default Logement;

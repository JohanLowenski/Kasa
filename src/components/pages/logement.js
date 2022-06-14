// IMPORTS
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "../css/logement.css";
import Dropdown from "../dropdown";
import Tag from "../tag";
import List from "../list";
import Rating from "../rating";
import SlideShow from "../slideshow";

const Logement = () => {
  /* A model of the data that is being used in the app. */
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

  /* Fetching the data from the json file. */
  const params = useParams();
  const [appartement, setAppartements] = useState(apptModel);
  useEffect(() => {
    fetch("/appt.json")
      .then((res) => res.json())
      .then((data) => {
        setAppartements(data.find((appt) => appt.id === params.id));
      });
  }, [params.id]);

  /* Checking if the appartement exists. If it does, it renders the logement. If it doesn't, it redirects
to the 404 page. */
  if (!appartement) {
    return <Redirection />;
  } else {
    return <RenderLogement appartement={appartement} />;
  }
};

/**
 * It returns a Navigate component that redirects to the 404 page
 * @returns A function that returns a Navigate component.
 */
const Redirection = () => {
  return <Navigate replace to="/404" />;
};

/**
 * It renders a logement
 * @param props - {
 * @returns A React component.
 */
const RenderLogement = (props) => {
  const appartement = props.appartement;
  const hostName = appartement.host.name.split(" ");
  return (
    <div className="logement">
      <SlideShow pictures={appartement.pictures} />
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
            <Rating rating={appartement.rating} />
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

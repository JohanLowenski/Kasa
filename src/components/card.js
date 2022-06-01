import React from "react";
import "./css/card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className="card">
      <Link to={`/logement/${props.appartement.id}`}>
        <h3>{props.appartement.title}</h3>
        <img src={props.appartement.cover} alt="appartement" />
      </Link>
    </div>
  );
}

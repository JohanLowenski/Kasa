import React from "react";
import "./css/card.css";
export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.appartement.title}</h3>
      <img src={props.appartement.cover} alt="appartement" />
    </div>
  );
}

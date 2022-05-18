import React from "react";
import "./css/card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{props.title}Titre de la location</h3>
      </div>
    </div>
  );
}

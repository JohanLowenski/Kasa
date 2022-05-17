import React from "react";
import "./css/entete.css";
import Kasa from "./kasa.svg";

export default function Entete() {
  return (
    <header className="App-header">
      {<img src={Kasa} alt="Kasa" />}
      <ul>
        <li>
          <a href={"Accueil"}>Accueil</a>
        </li>
        <li>
          <a href={"A propos"}>A propos</a>
        </li>
      </ul>
    </header>
  );
}

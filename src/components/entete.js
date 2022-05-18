import React from "react";
import "./css/entete.css";
import Kasa from "./logo.js";

export default function Entete(props) {
  return (
    <header className="App-header">
      <Kasa color="#ff6060" />
      <ul>
        <li>
          <a className={props.page === "accueil" ? "active" : ""} href={"Accueil"}>
            Accueil
          </a>
        </li>
        <li>
          <a className={props.page === "a_propos" ? "active" : ""} href={"A propos"}>
            A propos
          </a>
        </li>
      </ul>
    </header>
  );
}

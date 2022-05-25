import React from "react";
import "./css/entete.css";
import Kasa from "./logo.js";
import { Link } from "react-router-dom";

export default function Entete(props) {
  return (
    <header className="App-header">
      <Kasa color="#ff6060" />
      <ul>
        <li>
          <Link className={props.page === "accueil" ? "active" : ""} to={"/"}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className={props.page === "apropos" ? "active" : ""} to={"/about"}>
            A propos
          </Link>
        </li>
      </ul>
    </header>
  );
}

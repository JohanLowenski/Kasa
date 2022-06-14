import React from "react";
import "./css/entete.css";
import Kasa from "./logo.js";
import { NavLink } from "react-router-dom";
import { about, homePage } from "./routes";

const Entete = () => {
  return (
    <header className="App-header">
      <Kasa color="#ff6060" />
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to={homePage}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to={about}>
            A propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Entete;

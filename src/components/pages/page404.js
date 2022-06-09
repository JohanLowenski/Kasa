/**
 * It returns a div with a title, a subtitle and a link.
 * @param props - The props that are passed to the component.
 * @returns A React component.
 */
import React from "react";
import { Link } from "react-router-dom";
import "../css/page404.css";
function Page404(props) {
  return (
    <div className="error">
      <h1 className="title">404</h1>
      <p
        className="/* A className. */
      subtitle"
      >
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Page404;

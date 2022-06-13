import React from "react";
import { Link } from "react-router-dom";
import "../css/page404.css";
const Page404 = () => {
  return (
    <div className="error">
      <h1 className="title">404</h1>
      <p className="subtitle">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Page404;

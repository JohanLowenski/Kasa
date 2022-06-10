import React from "react";
import "./css/footer.css";
import Kasa from "./logo.js";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-logo">
          <Kasa color="#fff" />
        </div>
        <div className="footer-content-copyright">
          <h3>© 2022 Kasa. All rights reserved</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;

/**
 * It returns a div with a class of footer, which contains a div with a class of footer-content, which
 * contains a div with a class of footer-content-logo, which contains a component called Kasa, which is
 * a logo, and a div with a class of footer-content-copyright, which contains a h3 tag with the text "©
 * 2022 Kasa. All rights reserved".
 * @returns A React component
 */
import React from "react";
import "./css/footer.css";
import Kasa from "./logo.js";
export default function Footer() {
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
}

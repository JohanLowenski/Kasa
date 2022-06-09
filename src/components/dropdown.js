/**
 * The Dropdown function is a React component that renders a dropdown menu.
 * @param props - {
 * @returns A React component.
 */
import React, { useState } from "react";
import "./css/dropdown.css";
import DropdownImg from "../assets/Vector.png";

function Dropdown(props) {
  Dropdown.defaultProps = { open: false };
  const [open, setOpen] = useState(props.open);
  return (
    <div className="dropdown">
      <a className={`dropdownRef ${open && "active"}`} href="#dropdown_fiabilite" onClick={() => setOpen(!open)}>
        <div className="dropdown-content">
          <div className="title">{props.title}</div>
          {/* {"!contraire"} */}
          <img src={DropdownImg} alt="Title" />
        </div>
      </a>
      {open && <div className="dropdown-description">{props.description}</div>}
    </div>
  );
}
export default Dropdown;

import React, { useState } from "react";
import "./css/dropdown.css";
import DropdownImg from "../assets/Vector.png";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <div className="title">{props.title}</div>
        <a className={`dropdownRef ${open && "active"}`} href="#dropdown_fiabilite" onClick={() => setOpen(!open)}>
          <img src={DropdownImg} alt="Title" />
        </a>
      </div>
      {open && <div className="dropdown-description">{props.description}</div>}
    </div>
  );
}
export default Dropdown;

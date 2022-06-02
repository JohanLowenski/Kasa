import React, { useState } from "react";
import DropdownImg from "../assets/Vector.png";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown-logement">
      <div className="dropdown-content-logement">
        <div className="title-logement">{props.title}</div>
        <a
          className={`dropdownRef-logement ${open && "active"}`}
          href="#dropdown_fiabilite"
          onClick={() => setOpen(!open)}
        >
          <img src={DropdownImg} alt="Title" />
        </a>
      </div>
      {open && <div className="dropdown-description-logement">{props.description}</div>}
    </div>
  );
}
export default Dropdown;

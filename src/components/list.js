import React from "react";

function List(props) {
  return (
    <ul className="list">
      {props.list.map((string, index) => (
        <li key={index} className="list-string">
          {string}
        </li>
      ))}
    </ul>
  );
}
export default List;

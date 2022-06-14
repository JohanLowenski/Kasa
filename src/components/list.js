/**
 * It takes a list of strings as a prop, and returns a list of list items, each containing one of the
 * strings.
 * @param props - {
 * @returns A list of strings.
 */
import React from "react";

const List = (props) => {
  return (
    <ul className="list">
      {props.list.map((string, index) => (
        <li key={index} className="list-string">
          {string}
        </li>
      ))}
    </ul>
  );
};
export default List;

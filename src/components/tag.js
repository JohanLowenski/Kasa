/**
 * It takes an array of tags and returns a div with a class of containerTag, which contains a div with
 * a class of tag for each tag in the array
 * @param props - {
 * @returns An array of divs.
 */
import React from "react";
import "./css/tag.css";
const Tag = (props) => {
  return (
    <div className="containerTag">
      {props.tags.map((tag, index) => (
        <div key={index} className="tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};
export default Tag;

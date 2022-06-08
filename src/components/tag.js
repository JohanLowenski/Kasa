import React from "react";
import "./css/tag.css";
function Tag(props) {
  return (
    <div className="containerTag">
      {props.tags.map((tag, index) => (
        <div key={index} className="tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}
export default Tag;

import React, { useState } from "react";
import "../Components/styles/collaps.css";

function Collaps(props) {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="description">
      <p className="titre_description" onClick={showContent}>
        <span>{props.title}</span>
        <span>
          <i
            className={`fa-solid block ${
              isContentVisible ? "fa-chevron-down" : "fa-chevron-up"
            }`}
            
          ></i>
        </span>
      </p>
      {isContentVisible && (
        <p className="description_content">{props.content}</p>
      )}
    </div>
  );
}

export default Collaps;
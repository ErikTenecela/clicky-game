import React from "react";
import "./style.css";

function Card({ name, image }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
}

export default Card;

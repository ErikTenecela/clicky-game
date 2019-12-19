import React from "react";
import "./style.css";

function Card({ name, image, onClick }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} onClick={onClick} />
      </div>
    </div>
  );
}

export default Card;

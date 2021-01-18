import React from "react";
import "../styles/Hotel.css";

function Hotel({ id, image, name, price, subtitle }) {

  return (
    <div className="hotel">
      <img className="hotel__image" src={image} alt="" />
      <div className="hotel__info">
        <p className="hotel__title">{name}</p>
        <p className="hotel__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Hotel;

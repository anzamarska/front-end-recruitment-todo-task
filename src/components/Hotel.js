import React from "react";
import "../styles/Hotel.css";

function Hotel({ id, image, name, price, subtitle }) {

  return (
    <div className="hotel__container">
      <img className="hotel__image" src={image} alt="" />
      <div className="hotel__info">
        <p className="hotel__title">{name}</p>
        <p className="hotel__subtitle">{subtitle}</p>
        <p className="hotel__price">
          {/* per night */}
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="quantity__section">
        <button className="button--delete">delete hotel</button>
        <button className="button--decrease">-</button>
        <p>0</p>
        <button className="button--increase">+</button>
      </div>
      <p className="hotel__subtotalPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
    </div>
  );
}

export default Hotel;

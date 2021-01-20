import React, { useState } from "react";
import "../styles/Hotel.css";

function Hotel({ image, name, price, subtitle, deleteHotel, totalPrice, setPrice }) {
  const [nights, setNights] = useState(0)
  const hotelPrice = price * nights

  const increaseNights = () => {
    if (nights < 14){
      setNights(nights + 1);
      setPrice(totalPrice + Number(price))
    }
  }

  const decreaseNights = () => {
    if (nights > 0){
      setNights(nights - 1)
      setPrice(totalPrice - Number(price))
    }
  }

  return (
    <div className="hotel__container">
      <img className="hotel__image" src={image} alt="" />
      <div className="hotel__info">
        <p className="hotel__title">{name}</p>
        <p className="hotel__subtitle">{subtitle}</p>
        <p className="hotel__price">
          <strong>{price}</strong>
          <small>$ per night</small>
        </p>
      </div>
      <div className="quantity__section">
        <button className="button--delete" onClick={()=>{deleteHotel(name)}}>delete hotel</button>
        <button className="button--decrease" onClick={()=>{decreaseNights()}}>-</button>
        <p className="hotel__amount">{nights}</p>
        <button className="button--increase" onClick={()=>{increaseNights()}}>+</button>
        <p className="hotel__subtotalPrice">
          <small>$</small>
          <strong>{hotelPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Hotel;

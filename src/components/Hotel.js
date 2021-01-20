import React, { useState } from "react";
import "../styles/Hotel.css";

function Hotel({ image, name, price, subtitle, deleteHotel, totalPrice, setPrice }) {
  const [nights, setNights] = useState(0)
  const hotelPrice = price * nights

  const increaseNights = () => {
<<<<<<< HEAD
    if (nights < 14){
      setNights(nights + 1);
      setPrice(totalPrice + Number(price))
    }
=======
    setNights(nights + 1);
    setPrice(totalPrice + Number(price))
>>>>>>> e5c0cf68c75ea99dd43c9751e5d39249a1942303
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
<<<<<<< HEAD
        <p className="hotel__amount">{nights}</p>
        <button className="button--increase" onClick={()=>{increaseNights()}}>+</button>
        <p className="hotel__subtotalPrice">
=======
        <p>{nights}</p>
        <button className="button--increase" onClick={()=>{increaseNights()}}>+</button>
      </div>
      <p className="hotel__subtotalPrice">
>>>>>>> e5c0cf68c75ea99dd43c9751e5d39249a1942303
          <small>$</small>
          <strong>{hotelPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Hotel;

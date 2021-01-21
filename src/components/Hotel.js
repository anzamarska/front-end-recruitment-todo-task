import React, { useState } from "react";
import "../styles/Hotel.css";
import Skeleton from 'react-loading-skeleton';

function Hotel({ image, name, price, subtitle, deleteHotel, totalPrice, setPrice }) {
  const [nights, setNights] = useState(0)
  const hotelPrice = price * nights

  const increaseNights = () => {
    try {
      if (nights < 14){
        setNights(nights + 1);
        setPrice(totalPrice + Number(price))
      }
    } catch (error) {
      console.error("It is not possible to subtract nights in a hotel that has not yet been loaded on the page");
    }
  }

  const decreaseNights = () => {
    try {
      if (nights > 0){
        setNights(nights - 1)
        setPrice(totalPrice - Number(price))
      }
    } catch (error) {
      console.error("It is not possible to add nights in a hotel that is not yet loaded on the website");
    }
  }

  return (
    <div className="hotel__container">
      <img className="hotel__image" src={image} alt="" />
      <div className="hotel__info">
        <p className="hotel__title">{name || <Skeleton/>}</p>
        <p className="hotel__subtitle">{subtitle  || <Skeleton count={5}/>}</p>
        <p className="hotel__price">
          <strong>{price}</strong>
          <small>$ per night</small>
        </p>
      </div>
      <div className="quantity__section">
        <button className="button--delete" onClick={()=>{deleteHotel(name)}}>x</button>
        <button className="button--decrease" onClick={()=>{decreaseNights()}}>-</button>
        <p className="hotel__amount">{nights}</p>
        <button className="button--increase" onClick={()=>{increaseNights()}}>+</button>
        <p className="hotel__subtotalPrice">
          <small>$</small>
          <strong>{hotelPrice || 0}</strong>
        </p>
      </div>
    </div>
  );
}

export default Hotel;

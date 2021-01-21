import React from "react";
import "../styles/TotalPrice.css";
import { Link } from "react-router-dom";


function TotalPrice({totalPrice}) {
    
    return (
      <div className="totalPrice__container">
         <h3>Order total: {totalPrice} </h3>
         <Link to="/payment">
           <button className="totalPrice__buyButton">BUY</button>
         </Link>         
      </div>
    );
  }
  
  export default TotalPrice;
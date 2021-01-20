import React from "react";
import "../styles/TotalPrice.css";


function TotalPrice({totalPrice}) {
    
    return (
      <div className="totalPrice__container">
         <h3>Order total: {totalPrice} </h3>
      </div>
    );
  }
  
  export default TotalPrice;
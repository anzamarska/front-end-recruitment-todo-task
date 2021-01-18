import React from "react";
import "../styles/Header.css";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <div className="header__nav">
        <Link to="/">
            <div className="header__home">                
                <p>Home</p>
            </div>
        </Link>
        <Link to="/payment">
            <div className="header__basket">
                <p> My Basket </p>
            </div>
        </Link>
      </div>
   
 </div>
  );
}

export default Header;

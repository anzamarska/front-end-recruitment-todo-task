import React from "react";
// import "./Home.css";
import Hotel from "../../components/Hotel";


export const Home = () => (
<div className="home">
  <div className="home__container">
   
    <div className="home__row">
      <Hotel
        id="1"
        name="AAA hotel name"
        price={29.22}
        image=""
        subtitle=""
      />

    </div>

  </div>
</div>
);



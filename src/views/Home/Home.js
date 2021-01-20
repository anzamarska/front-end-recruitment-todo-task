import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import Hotel from "../../components/Hotel";
import TotalPrice from "../../components/TotalPrice";

function Home(){

  const [hotels, setHotels] = useState([]);
  const [totalPrice, setPrice] = useState(0);


  useEffect(() => {
      fetch('https://60058d6f75860e0017c5cc76.mockapi.io/id')
      .then( response => response.json())
      .then((data) => {
          setHotels(data)
      })
      .catch( error => alert("Something went wrong! Try again"));
  }, [] );

  const deleteHotel = (name) => {
    setHotels({
      hotels: hotels.filter((hotel)=>{
        return hotel.name !== name;
      }),
    });
  };

  return (
    <div className="home">
      <div className="home__container">
          {hotels.map((hotel)=>(
            <Hotel
              key={hotel.name}
              name={hotel.name}
              price={hotel.price}
              image={hotel.image}
              subtitle={hotel.subtitle}
              deleteHotel={deleteHotel}
              setPrice={setPrice}
              totalPrice={totalPrice}
            />
          ))}
          <TotalPrice totalPrice={totalPrice}/>
      </div>
    </div>
    )
  }
  
  export default Home;
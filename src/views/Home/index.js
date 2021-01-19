import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import Hotel from "../../components/Hotel";


function Home(){

  const [hotels, setHotels] = useState({hotels:""})

  useEffect(() => {
      fetch('https://60058d6f75860e0017c5cc76.mockapi.io/id')
      .then( response => response.json())
      .then((data) => {
       
          setHotels({
              hotels: data
          })
      })
      .catch( error => console.error(error));
  }, [] );

  return (      
    console.log(hotels.hotels[0]),
    <div className="home">
      <div className="home__container">
          {hotels.hotels.map((hotel)=>(
            <Hotel
              id={0}
              name={hotel.name}
              price={hotel.price}
              image={hotel.image}
              subtitle={hotel.description}
            />
          ))}
      </div>
    </div>
    )
  }
  
  export default Home;
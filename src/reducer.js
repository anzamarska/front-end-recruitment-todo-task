export const initialState = {
  totalPrice: 0,
  hotels: []
};

// export const getTotalPrice = (totalPrice) => {
//   {totalPrice};
// }
// selector
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

// reducer is sth that alweys listen for some changes fo state in app
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        totalPrice: [Number(state.allPrice) + Number(action.item.price)],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        totalPrice: [Number(state.allPrice) + Number(action.item.price)],
      };
    case "CHANGE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: [state.totalPrice + action.price]
      };

       // const deleteHotel = (name) => {
  //   setHotels({
  //     items: hotels.filter((item) => {
  //       console.log(item.name)
  //       return item.name !== name;
  //     }),
 
  //   });
  //   console.log("hotels", hotels);
  // };


    case "REMOVE_HOTEL":
      return {
        ...state,
        hotels: []
      
      }
    default:
      return state;
  }
};

export default reducer;

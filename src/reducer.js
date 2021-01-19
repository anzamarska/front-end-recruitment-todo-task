export const initialState = {
  basket: [],
  totalPrice: [],
};


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
      
    default:
      return state;
  }
};

export default reducer;

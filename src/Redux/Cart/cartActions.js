import {
  FETCH_CARTS_SUCCESS,
  FETCH_CARTS_FAILURE,
  FETCH_CARTS_REQUEST,
  ADD_TO_CART
} from "./cartTypes";

const axios = require("axios");

//loading data
export const fetchCartRequest = () => {
  return {
    type: FETCH_CARTS_REQUEST,
  };
};

export const fetchCartSuccess = (data) => {
  return {
    type: FETCH_CARTS_SUCCESS,
    payload: data,
  };
};

export const fetchCartFailure = (error) => {
  return {
    type: FETCH_CARTS_FAILURE,
    payload: error,
  };
};

export const addToCart = (data) =>{
  return {
    type: ADD_TO_CART,
    payload: data

  }
}

// export const fetchAllCarts = () => {
//   return (dispatch) => {
//     dispatch(fetchCartRequest);
//     axios
//       .get(`https://fakestoreapi.com/carts`)
//       .then((res) => {
//         const carts = res.data;
//         dispatch(fetchCartSuccess(carts));
//         console.log(carts);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         dispatch(fetchCartFailure(errorMessage));
//         console.log(errorMessage);
//       });
//   };
// };

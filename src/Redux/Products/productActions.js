import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

const axios = require("axios");

//loading data
export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductSuccess(products));
        console.log(products);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};

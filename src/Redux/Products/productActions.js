import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

const axios = require("axios");

//loading data
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductsSuccess(products));
        console.log(products);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductsFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};

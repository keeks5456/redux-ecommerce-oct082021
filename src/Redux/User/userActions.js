import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./userTypes";
const axios = require("axios");

//loading data
export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};




//users action creators

export const fetchAllUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`https://fakestoreapi.com/users`)
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
        console.log(users);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};

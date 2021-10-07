import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST} from "./userTypes";
const axios = require('axios')



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

export const fetchAllUsers = () =>{
  return (/*dispatch*/) =>{
    axios.get(`https://fakestoreapi.com/users`)
    .then(res =>{
      const users = res
      console.log(users)
    })
    .catch((error) =>{
      const errorMessage = error.message
      console.log(errorMessage)
    })
  }
}
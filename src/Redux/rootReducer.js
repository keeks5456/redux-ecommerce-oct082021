import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import productReducer from "./Products/productReducers";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import productReducer from "./Products/productReducers";
import cartReducer from "./Cart/cartReducers";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  carts: cartReducer
});

export default rootReducer;

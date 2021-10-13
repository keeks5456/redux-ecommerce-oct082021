
const initialState = {
  loading: false,
  products: [],
  cart: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart:[...state.cart, action.payload]
      }
    case "REMOVE_PRODUCT_FROM_CART":
      return {
        cart:[
          ...state.cart.filter(c => c !== action.payload)
        ]
      }
    default:
      return state;
  }
};

export default productReducer;

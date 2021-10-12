const initialState = {
  loading: false,
  carts: [],
  error: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARTS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_CARTS_SUCCESS":
      return {
        ...state,
        loading: false,
        carts: action.payload,
      };
    case "FETCH_CARTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload]
      }
    default:
      return state;
  }
};

export default cartReducer;

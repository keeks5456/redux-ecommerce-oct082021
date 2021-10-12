const initialState = {
  loading: false,
  items: [],
  error: "",
};

const updateCartArray = (array, action )=>{
  return array.map((item, index) =>{
    if(index !== action.payload){
      return item
    }
    return {
      ...item,
      inBasket: true
    }
  })
}

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
        items: action.payload,
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
        items: updateCartArray(state.items, action)
      };

    default:
      return state;
  }
};

export default cartReducer;

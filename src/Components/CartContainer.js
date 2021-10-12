import { addToCart } from "../Redux/Cart/cartActions";

import { connect, useSelector } from "react-redux";
import { useEffect } from "react";

const CartContainer = ({cartData, fetchAllCarts}) => {

const items = useSelector(state => state.items)

  
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = (state) =>{
  console.log(state.carts, state.products)
  return {
    itemsData: state.items,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart: () => dispatch(addToCart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)


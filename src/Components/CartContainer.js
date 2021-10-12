import { fetchAllCarts } from "../Redux/Cart/cartActions";
import { connect } from "react-redux";
import { useEffect } from "react";

const CartContainer = ({cartData, fetchAllCarts}) => {

  // useEffect(() =>{
  //   fetchAllCarts()
  // },[])
  
  return (
    <div>
      
    </div>
  )
}

// const mapStateToProps = (state) =>{
//   return {
//     cartData: state.carts
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     fetchAllCarts: () => dispatch(fetchAllCarts())
//   }
// }
export default CartContainer

//connect(mapStateToProps, mapDispatchToProps)
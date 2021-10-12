import { connect, useSelector } from "react-redux";
import { useState } from "react";
import { Card, Image } from "../Styled-Component/productCardStyles";

const CartContainer = () => {
const products = useSelector(state => state.products)
const items = useSelector(state => state.products.cart)
const [toggleDetails, setToggleDetails] = useState(false);

console.log(items, products)
  return (
    <div>
      {items.map((item) =>{
        <Card>
        <h4>{item.title}</h4>
        <Image src={item.image} alt={item.title}></Image>
        <p>{item.price}</p>
        {toggleDetails ? <p>{item.description}</p> : null}
        <button onClick={() => setToggleDetails(!toggleDetails)}>
          See Details
        </button>
      </Card>
      })}
    </div>
  )
}

// const mapStateToProps = state =>{
//   return {
//     productsData: state.productsData

//   }
// }


export default connect()(CartContainer)


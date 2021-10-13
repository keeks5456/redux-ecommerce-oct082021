import { connect, useSelector } from "react-redux";
import { useState } from "react";
import { Card, Image } from "../Styled-Component/productCardStyles";
import { removeProductFromCart } from "../Redux/Products/productActions";

const CartContainer = () => {
  // const products = useSelector((state) => state.products);
  const items = useSelector((state) => state.products.cart);
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id}>
          {console.log(item.title)}
          <h4>{item.title}</h4>
          <Image src={item.image} alt={item.title}></Image>
          <p>{item.price}</p>
          {toggleDetails ? <p>{item.description}</p> : null}
          <button onClick={() => setToggleDetails(!toggleDetails)}>
            See Details
          </button>
          <button onClick={() => removeProductFromCart(item)}>Remove Item</button>
        </Card>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (item) => dispatch(removeProductFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CartContainer);

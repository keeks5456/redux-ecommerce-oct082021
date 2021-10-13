import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  addProductToCart,
} from "../Redux/Products/productActions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

//styles
import { Card, Image } from "../Styled-Component/productCardStyles";

const ProductCard = ({ products, addProductToCart }) => {
  const [toggleDetails, setToggleDetails] = useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Card>
      <h4>{products.title}</h4>
      <Image src={products.image} alt={products.title}></Image>
      <p>{products.price}</p>
      {toggleDetails ? <p>{products.description}</p> : null}
      <button onClick={() => setToggleDetails(!toggleDetails)}>
        See Details
      </button>
      <button onClick={() => addProductToCart(products)}>Add To Cart</button>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (products) => dispatch(addProductToCart(products)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

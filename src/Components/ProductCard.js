import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts, addProductToCart } from "../Redux/Products/productActions";
import { useEffect, useState } from "react";

//styles
import { Card, Image } from "../Styled-Component/productCardStyles";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch()
  const [toggleDetails, setToggleDetails] = useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const addToCart = (product) =>{
    dispatch(addProductToCart(product))
  }

  return (
    <>
    <Card>
      <h4>{products.title}</h4>
      <Image src={products.image} alt={products.title}></Image>
      <p>{products.price}</p>
      {toggleDetails ?  <p>{products.description}</p> : null}
      <button onClick={() => setToggleDetails(!toggleDetails)}>
        See Details
      </button>
      <button onClick={() => addToCart(products)}>Add To Cart</button>
    </Card>


</>
  );
};



export default ProductCard;

/*<p>{p.description}</p>*/

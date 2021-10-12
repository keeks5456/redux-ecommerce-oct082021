import React from "react";
import { useSelector } from "react-redux";
import { fetchAllProducts } from "../Redux/Products/productActions";
import { useEffect, useState } from "react";

//styles
import { Card, Image } from "../Styled-Component/productCardStyles";
import { addToCart } from "../Redux/Cart/cartActions";

const ProductCard = ({ products }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  const product = useSelector((state) => state.products);
  const carts = useSelector((state) => state.carts)
  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log(console.log(toggleDetails));
  return (
    <Card>
      <h4>{products.title}</h4>
      <Image src={products.image} alt={products.title}></Image>
      <p>{products.price}</p>
      {toggleDetails ?  <p>{products.description}</p> : null}
      <button onClick={() => setToggleDetails(!toggleDetails)}>
        See Details
      </button>
      <button onClick={() => addToCart()}>Add To Cart</button>

    </Card>
  );
};

export default ProductCard;

/*<p>{p.description}</p>*/

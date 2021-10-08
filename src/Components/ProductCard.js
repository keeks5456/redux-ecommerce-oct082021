import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../Redux/Products/productActions";
import { useEffect } from "react";

const ProductCard = () => {
  
  const product = useSelector((state) => state.products);
  useEffect(() => {
    fetchAllProducts();
  }, []);


  console.log(product.products);
  return (
    <div>
    {product.products && product.products.map((p) =>(
      <div key={p.id}>
        <h2>{p.title}</h2>
        <img src={p.image} alt={p.title}></img>
        <p>{p.price}</p>
        <p>{p.description}</p>
      </div>
    ))}
    </div>
  );
};

export default ProductCard;

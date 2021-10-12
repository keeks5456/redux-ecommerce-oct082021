import { fetchAllProducts } from "../Redux/Products/productActions";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const ProductContainer = ({ productData, fetchAllProducts }) => {
  
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return productData.loading ? (
    <h2>Loading... </h2>
  ) : productData.error ? (
    <p>{productData.error}</p>
  ) : (
    <div>
    {productData.products && productData.products.map((product)=>(
      <ProductCard key={product.id} products={product}/>
    ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    productData: state.products,
    cartData: state.carts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
/*
      {productData &&
        productData.products &&
        productData.products.map((product) => <ProductCard key={product.id} product={product} />)}

*/
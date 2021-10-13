import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../Redux/Products/productActions";
import ProductCard from "./ProductCard";
import { Container } from "../Styled-Component/productCardStyles";

const ProductContainer = ({ productData, cartData, fetchAllProducts }) => {
  
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return productData.loading ? (
    <h2>Loading... </h2>
  ) : productData.error ? (
    <p>{productData.error}</p>
  ) : (
    <Container>
    {productData.products && productData.products.map((product)=>(
      <ProductCard key={product.id} products={product} cartItem={cartData}/>
    ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    productData: state.products,
    cartData: state.products.cart

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
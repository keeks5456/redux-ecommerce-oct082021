//actions
// import { fetchAllUsers } from "./Redux/User/userActions";
// import { fetchAllProducts } from "./Redux/Products/productActions";
// import { fetchAllCarts } from "./Redux/Cart/cartActions";

//redux
import { useSelector, useDispatch } from "react-redux";

//components
import ProductContainer from "./Components/ProductContainer";
import CartContainer from "./Components/CartContainer";

function App() {
  const dispatch = useDispatch();

  // const users = useSelector((state) => state.users);
  // const products = useSelector((state) => state.products);
  // const carts = useSelector((state) => state.carts);

  return (
    <div>
    <ProductContainer />
    
    </div>
    );
  }
  
  export default App;
  
  
  /*
  <CartContainer />
  <button onClick={() => dispatch(fetchAllProducts(products))}>
        products
      </button>
      <button onClick={() => dispatch(fetchAllUsers(users))}>Users</button>
      <button onClick={() => dispatch(fetchAllCarts(carts))}>Carts</button>

*/
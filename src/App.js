//redux
import { useSelector, useDispatch } from "react-redux";

//components
import ProductContainer from "./Components/ProductContainer";
import CartContainer from "./Components/CartContainer";

//routes
import { Route, Switch } from "react-router";

function App() {
  const dispatch = useDispatch();

  return (
    <Switch>
      <Route path="/" component={ProductContainer}>
        <ProductContainer />
      </Route>
      <Route path="/cart" component={CartContainer}>
      <CartContainer />
      </Route>
    </Switch>
  );
}

export default App;

/*
  <button onClick={() => dispatch(fetchAllProducts(products))}>
        products
      </button>
      <button onClick={() => dispatch(fetchAllUsers(users))}>Users</button>
      <button onClick={() => dispatch(fetchAllCarts(carts))}>Carts</button>

*/

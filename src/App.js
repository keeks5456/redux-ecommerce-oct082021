//redux
import { useSelector, useDispatch } from "react-redux";

//components
import ProductContainer from "./Components/ProductContainer";
import CartContainer from "./Components/CartContainer";
import Navagation from "./Components/Navagation";

//routes
import { Route, Switch } from "react-router";

function App() {


  return (
    <>
    <Navagation />
    <Switch>
      <Route exact path="/" component={ProductContainer}>
        <ProductContainer />
      </Route>
      <Route exact path="/cart" component={CartContainer}>
      <CartContainer />
      </Route>
    </Switch>
    </>
  );
}

export default App;


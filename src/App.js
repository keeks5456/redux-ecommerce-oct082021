//actions
import { fetchAllUsers } from "./Redux/User/userActions";
import { fetchAllProducts } from "./Redux/Products/productActions";
import { fetchAllCarts } from "./Redux/Cart/cartActions";

import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const products = useSelector((state) => state.products);
  const carts = useSelector((state) => state.carts);

  console.log(users);
  console.log(products);

  return (
    <div>
      <button onClick={() => dispatch(fetchAllProducts(products))}>
        products
      </button>
      <button onClick={() => dispatch(fetchAllUsers(users))}>Users</button>
      <button onClick={() => dispatch(fetchAllCarts(carts))}>Carts</button>

    </div>
  );
}

export default App;

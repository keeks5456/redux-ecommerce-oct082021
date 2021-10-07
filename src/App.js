import { fetchAllUsers } from './Redux/User/userActions';
import { fetchAllProducts } from './Redux/Products/productActions';

import { useSelector, useDispatch } from 'react-redux';
function App() {
const dispatch = useDispatch()

  const users = useSelector(state => state.users)
  const products = useSelector(state => state.products)

  console.log(users)
  console.log(products)

  return (
    <div >
<button onClick={() => dispatch(fetchAllProducts(products))}>Producs</button>
<button onClick={() => dispatch(fetchAllUsers(users))}>Users</button>

    </div>
  );
}

export default App;

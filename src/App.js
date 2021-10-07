import { fetchAllUsers } from './Redux/User/userActions';

function App() {
  return (
    <div >
    <button onClick={() => fetchAllUsers()}></button>
    </div>
  );
}

export default App;

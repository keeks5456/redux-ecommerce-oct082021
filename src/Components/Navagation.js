import { Link } from "react-router-dom";
import { NavDiv } from "../Styled-Component/navagationStyles";

const Navagation = () => {

  
  return (
    <NavDiv>
      <h1>Shop Till Ya Drop</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">View Cart</Link>
    </NavDiv>
  );
};

export default Navagation;

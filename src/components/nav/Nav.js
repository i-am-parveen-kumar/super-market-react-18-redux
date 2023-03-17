import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav(props) {
  const products = useSelector((state) => {
    return state.products.products;
  });

  const getCount = () => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.qty;
    });
    return sum;
  };
  return (
    <nav className="nav">
      <a className="heading">SuperM</a>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link className="cart-btn" to="/cart">
            Cart ({getCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  items: 0,
};

export default Nav;

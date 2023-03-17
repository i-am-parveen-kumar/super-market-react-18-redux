import "./Cart.css";
import { useSelector } from "react-redux";
import CartTableItem from "./CartTableItem";

function Cart() {
  const products = useSelector((state) => {
    return state.products.products;
  });
  const total = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  };
  return (
    <div className="cart-container">
      <h1 className="your-cart-text">Your Cart</h1>
      {products.length > 0 && (
        <table className="cart-table">
          <thead>
            <tr>
              <th className="th-product" width={"25%"}>
                Product
              </th>
              <th width={"20%"}>Unit price</th>
              <th width={"10%"}>Quanity</th>
              <th width={"25%"}>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <CartTableItem item={product} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}></th>
              <th className="table-footer-th">Total</th>
              <th className="table-footer-th">{total(products)}</th>
            </tr>
          </tfoot>
        </table>
      )}
      {products.length === 0 && (
        <p className="no-item-text">
          You have not added any product to your cart yet.
        </p>
      )}
    </div>
  );
}

export default Cart;

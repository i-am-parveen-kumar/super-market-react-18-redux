import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../../store/reducers/reducer";
import { Link } from "react-router-dom";

function Product(product) {
  const qty = useSelector((state) => {
    const filteredProduct = state.products.products.filter(
      (storedProduct) => storedProduct.id === product.id
    )[0];
    return filteredProduct?.qty;
  });
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(productsSlice.actions.addProduct(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(productsSlice.actions.removeProduct(product));
  };

  const { imgURL, name, description, price } = product;
  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/product/${product.id}/details`}>
          <img
            src={imgURL}
            width={"100px"}
            height={"100px"}
            className="product-image"
          ></img>
        </Link>
        {qty > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{qty}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="checkout-container">
        <div>
          {qty > 0 && (
            <button
              onClick={() => handleRemoveProduct(product)}
              className="cross-btn btn"
            >
              x
            </button>
          )}
        </div>
        <button
          onClick={() => handleAddProduct(product)}
          className="addtocart btn"
        >
          ${price}
        </button>
      </div>
    </div>
  );
}

export default Product;

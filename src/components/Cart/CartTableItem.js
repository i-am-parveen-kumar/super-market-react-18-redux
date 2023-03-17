import "./CartTableItem.css";

function CartTableItem(productItem) {
  const { imgURL, name, price, qty } = productItem.item;
  return (
    <tr className="tbody-tr">
      <td>
        <img src={imgURL} width="30px" height={"30px"}></img>
        {name}
      </td>
      <td>${price}</td>
      <td>{qty}</td>
      <td>{price * qty}</td>
    </tr>
  );
}
export default CartTableItem;

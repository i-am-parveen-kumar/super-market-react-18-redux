import Product from "../Product/Product";
import "./Products.css";
import { getSkuList } from "./SkuService";
function Products() {
  return (
    <div className="products-main">
      <div className="products-container">
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className="products-grid">
          {getSkuList().map((sku) => (
            <Product
              id={sku.id}
              imgURL={sku.imgURL}
              name={sku.name}
              description={sku.description}
              price={sku.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

import { getSkuById } from "../Products/SkuService";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import Tabs from "./Tabs";

function ProductDetails() {
  const { id } = useParams();
  const sku = getSkuById(parseInt(id));
  return (
    <div className="product-details-container">
      <div className="product-details-layout">
        <div>
          <h1>{sku.name}</h1>
          <img
            className="product-detail-image"
            src={sku.imgURL}
            height={"125px"}
            width={"125px"}
          ></img>
        </div>
        <div>
          <div className="tabs">
            <Tabs sku={sku} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

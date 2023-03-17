import { NavLink, Route, Switch } from "react-router-dom";
import NutrientTable from "./NutrientTable";
import "./Tabs.css";

function Tabs(sku) {
  const { id, description, price, storageInstructions, nutrients } = sku.sku;
  return (
    <div>
      <nav className="tab-nav">
        <ul>
          <li>
            <NavLink
              className="tab-header"
              to={`/product/${id}/details`}
              activeClassName="active-tab"
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              className="tab-header"
              to={`/product/${id}/nutrition`}
              activeClassName="active-tab"
            >
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink
              className="tab-header"
              to={`/product/${id}/storage`}
              activeClassName="active-tab"
            >
              Storage
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`/product/${id}/details`}>
          <h2>
            {description} sold at ${price} per piece.
          </h2>
        </Route>
        <Route path={`/product/${id}/nutrition`}>
          <NutrientTable nutrients={nutrients} />
        </Route>
        <Route path={`/product/${id}/storage`}>
          <p>
            <span className="storage-instructions">Storage instructions: </span>
            {storageInstructions}
          </p>
        </Route>
      </Switch>
    </div>
  );
}

export default Tabs;

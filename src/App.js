import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

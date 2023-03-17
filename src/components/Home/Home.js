import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="home-text">
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/products" className="start-shopping-btn">
          Start shopping
        </Link>
      </div>
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
          width="350"
          height="240"
          className="rounded"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Home;

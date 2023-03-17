import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="home-text">
        <h1>About Us</h1>
        <p>
          We started operations in 2020. We guarantee fresh produce. <br />
          Save time by shopping on our app and we'll deliver the products right
          to your home. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg"
          width="183"
          className="rounded"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default AboutUs;

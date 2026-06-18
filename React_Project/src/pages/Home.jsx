import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to ShopSphere</h1>

        <p>
          Discover amazing products at
          affordable prices.
        </p>

        <Link to="/products">
          <button>
            Shop Now
          </button>
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>
            Get products delivered quickly.
          </p>
        </div>

        <div className="feature-card">
          <h3>Best Prices</h3>
          <p>
            Affordable products for everyone.
          </p>
        </div>

        <div className="feature-card">
          <h3>Secure Payment</h3>
          <p>
            Safe and trusted payment methods.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
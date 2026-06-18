import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";
function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2 className="logo">
        ShopSphere
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/admin">
          Admin
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
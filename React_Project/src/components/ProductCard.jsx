import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div className="btn-group">
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: product,
            })
          }
        >
          Add To Cart
        </button>

        <Link
          to={`/product/${product.id}`}
        >
          <button>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
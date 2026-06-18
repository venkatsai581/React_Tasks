import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
function Cart() {
  const {
    cart,
    dispatch,
    totalPrice,
  } = useCart();

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>
          Cart is Empty
        </h2>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                width="80"
              />

              <h4>
                {item.title}
              </h4>

              <p>
                Qty:
                {
                  item.quantity
                }
              </p>

              <button
                onClick={() =>
                  dispatch({
                    type:
                      "INCREMENT",
                    payload:
                      item.id,
                  })
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type:
                      "DECREMENT",
                    payload:
                      item.id,
                  })
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type:
                      "REMOVE_FROM_CART",
                    payload:
                      item.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>
            Total: $
            {totalPrice.toFixed(
              2
            )}
          </h2>

          <button
            onClick={() =>
              dispatch({
                type:
                  "CLEAR_CART",
              })
            }
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
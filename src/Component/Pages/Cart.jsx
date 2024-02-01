// Cart.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import "../../style/cart.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleIncreaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { id },
    });
  };

  const handleDecreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id },
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateOverallTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ maxWidth: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <strong>{item.title}</strong> - ${item.price.toFixed(2)}{" "}
                    <span>Quantity: {item.quantity}</span> -{" "}
                    <span>Total: ${calculateItemTotal(item).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-buttons">
                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </button>
                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                      -
                    </button>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="overall-total">
            Overall Total: ${calculateOverallTotal().toFixed(2)}
          </p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;

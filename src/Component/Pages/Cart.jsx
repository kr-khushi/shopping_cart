// Cart.jsx
import React from "react";
import { useCart } from "../Context/CartContext";


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
    <div className="cart-container max-w-2xl mx-auto mt-8 mb-20">
      <h2 className="text-2xl flex justify-center font-bold mb-12">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="flex justify-center">Your cart is empty</p>
      ) : (
        <>
          <ul className="md:list-decimal pl-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="mb-4 border-b pb-2 md:flex md:justify-between"
              >
                <div className="flex items-center flex-col md:flex-row md:items-start">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="max-w-24 mb-4 md:mr-4 md:mb-0"
                  />
                  <div className="md:w-3/4 text-base  ">
                    <strong className="">{item.title}</strong>
                    <p className="text-gray-600 mb-2  ">Quantity: {item.quantity}</p>
                    <p className="text-gray-600 mb-2">
                      Total: ${calculateItemTotal(item).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="cart-item-buttons space-x-2 mt-2 md:mt-0 ">
                  <button
                    className="text-blue-500 border p-1 rounded"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="text-blue-500 border p-1 rounded"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="text-red-500 border p-1 rounded"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="overall-total text-xl font-semibold mt-4 flex justify-center">
            Overall Total: ${calculateOverallTotal().toFixed(2)}
          </p>
          <button
            className="block bg-red-500 text-white py-2 px-4 rounded-md mt-4 md:inline-block mx-auto"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>

  );
};

export default Cart;

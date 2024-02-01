import React, { createContext, useContext, useReducer } from "react";

// Create a context
const CartContext = createContext();

// Create a CartProvider component to wrap your app
const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  // CartContext.js
  // ... (previous code)

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          // If the item already exists in the cart, increase the quantity
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          // If the item is not in the cart, add it with quantity 1
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }


      case "INCREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };

      case "DECREASE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          ),
        };

      case "REMOVE_ITEM":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };

      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };

      // Add more cases for other actions if needed
      default:
        return state;
    }
  };

  // ... (remaining code)

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the CartContext
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };

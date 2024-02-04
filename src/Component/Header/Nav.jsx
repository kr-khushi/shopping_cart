import React from "react";
import { Link } from "react-router-dom";
import "../../style/nav.css";
import { useCart } from "../Context/CartContext";

const Nav = () => {
  const { state } = useCart();
  const { cart } = state;
  return (
    <>
      <nav>
        <div className="left-links">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="right-links">
          <Link to="/cart">
            <span className="cart-length">{cart.length}</span> Cart
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;

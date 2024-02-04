import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Nav = () => {
  const { state } = useCart();
  const { cart } = state;
  return (
    <>
      <nav>
        <div className="container mx-auto px-3 py-2 flex bg-slate-400 shadow-xl text-white space-x-3 justify-between">
          <div className="flex space-x-3">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
          </div>
          <div className=" ">
            <Link to="/cart">
              <span className="cart-length">{cart.length}</span> Cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

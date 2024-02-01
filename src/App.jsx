import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Nav from "./Component/Header/Nav";
import Product from "./Component/Pages/Product";
import Cart from "./Component/Pages/Cart";
import { CartProvider } from "./Component/Context/CartContext";
import SingleProduct from "./Component/Pages/SingleProduct";

const App = () => {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;

// ProductCard.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
const ProductCard = ({ id, title, price, description, category , images}) => {
  const truncatedDescription = description.substring(0, 100) + "...";

  const navigate = useNavigate();

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, description, category, images },
    });
  };

  const handleInidividualProduct = () => {
    // const id = useParams();
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <img src={images} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-description">{truncatedDescription}</p>
        <p className="product-category">{category.name}</p>
        {/* <p className="product-rating">Rating: {rating.rate}</p>
        <p className="product-count">Count: {rating.count}</p> */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button
          className="add-to-cart-button"
          onClick={handleInidividualProduct}
        >
          View All Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

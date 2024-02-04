// ProductCard.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
const ProductCard = ({ id, title, price, description, category, images }) => {
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

  // const handleInidividualProduct = () => {
  //   // const id = useParams();
  //   navigate(`/product/${id}`);
  // };

  return (
    <div className="product-card bg-white shadow-lg p-4 rounded-md">
      <img src={images} alt={title} className="product-image mb-4" />
      <div className="product-details">
        <h3 className="product-title text-xl font-semibold mb-2">{title}</h3>
        <p className="product-price text-gray-700">
          <span className="font-bold">Price:</span> ${price.toFixed(2)}
        </p>
        <p className="product-description text-gray-600 mb-2">
          {truncatedDescription}
        </p>
        <p className="product-category text-gray-700">
          <span className="font-bold ">Category:</span> {category.name}
        </p>
        <div className="flex mt-3">

          <button
            className="add-to-cart-button bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {/* <button
            className="view-details-button bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
            onClick={handleInidividualProduct}
          >
            View Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

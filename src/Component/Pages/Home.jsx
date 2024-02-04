import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("offset", 0);
    queryParams.set("limit", 5);
    // navigate("/product");
    navigate(`/product?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page!</h1>
          <h3 className="text-lg mb-4">
            To show all the products, please click the button below!
          </h3>
          <button
            className="bg-blue-500 hover:translate-x-3 text-white px-4 py-2 rounded-md"
            onClick={handleClick}
          >
            Click me
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import ProductCard from "../Extra_Component/ProductCard";
import "../../style/product.css";
import useFetchData from "../../hooks/useFetchData";
import Pagination from "../Extra_Component/Pagination";

const Product = () => {
  const url = `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`;
  // const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [data, loading, error] = useFetchData(`https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=10`);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentposts = data.slice(firstPostIndex, lastPostIndex);

  // useEffect(() => {
  //   // Filter products based on the search query
  //   setFilteredProducts(
  //     currentposts.filter((product) =>
  //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   );

  // }, [searchQuery, currentposts]);


  if (loading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <h1>Error in fetching data</h1>;
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="product-container">
        {data && data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        totalPosts={80}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Product;

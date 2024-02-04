import React, { useEffect, useState } from "react";
import ProductCard from "../Extra_Component/ProductCard";
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



  if (loading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <h1>Error in fetching data</h1>;
  }

  return (
    <>
      <div className="flex flex-col items-center m-12">
        <div className="product-container grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-12">
          {data && data?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <Pagination
          className="mt-4"
          totalPosts={80}
          postPerPage={postPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Product;

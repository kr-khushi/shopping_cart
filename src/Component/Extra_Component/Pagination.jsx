import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Pagination = ({
  totalPosts,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  //   const history = useHistory();
  const navigate = useNavigate();
  const location = useLocation();
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const queryParams = new URLSearchParams(location.search);
    queryParams.set("offset", (page - 1) * postPerPage);
    queryParams.set("limit", postPerPage);

    // Update the URL with the new offset and limit
    // history.push(`?${queryParams.toString()}`);
    navigate(`?${queryParams.toString()}`);
  };
  const mobileButtonLimit = 5;

  return (
    <>
      <div className="pagination flex flex-wrap space-x-2 mt-9 overflow-x-auto justify-center">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md text-sm md:text-base mb-2`}
            style={{ width: `calc(100% / ${mobileButtonLimit} - 8px)` }}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;

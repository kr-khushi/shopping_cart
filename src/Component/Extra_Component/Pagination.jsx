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

  return (
    <>
      <div className="pagination">
        {pages.map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;

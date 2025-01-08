import "./styles.css";
import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [pageCount, setPageCount] = useState(1);
  const [paginationContent, setPaginationContent] = useState([]);
  const [itemsPerPage] = useState(10); // Items to display per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPaginationContent(data); // Store the entire dataset
    } catch (e) {
      console.log(e);
    }
  };

  const handleIncrement = () => {
    if (pageCount < totalPages) {
      setPageCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (pageCount > 1) {
      setPageCount((prev) => prev - 1);
    }
  };

  const handlePageClick = (page) => {
    setPageCount(page);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(paginationContent.length / itemsPerPage);

  // Calculate the range of pages to display (max 5 at a time)
  const startPage = Math.max(1, pageCount - 2); // Ensure it doesn't go below 1
  const endPage = Math.min(totalPages, startPage + 4); // Ensure it doesn't exceed total pages
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  // Calculate the paginated data to display
  const startIndex = (pageCount - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = paginationContent.slice(startIndex, endIndex);

console.log(paginationContent);


  return (
    <div className="pagination-container">
      <div className="pagination-content">
        <h2>Pagination</h2>
        {currentPageData.map((item, index) => (
          <div key={index}>
            <p>{item.id}  {" "}{item.title}</p>
          </div>
        ))}
        <div className="pagination-controls">
          <button
            onClick={handleDecrement}
            disabled={pageCount === 1}
            className="pagination-button"
          >
            {"<<"} Previous
          </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`pagination-button ${
                page === pageCount ? "active" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleIncrement}
            disabled={pageCount === totalPages}
            className="pagination-button"
          >
            Next {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./../App.css";

function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 30;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="parentContainer">
        {currentItems.map((items, index) => (
          <div className="card" key={index}>
            <img
              src={items.thumbnailUrl}
              alt={items.title}
              className="card-image"
            />
            <div className="container">
              <h4>
                <b>{items.title}</b>
              </h4>
              <p>This is card {items.id}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
            style={{ color: currentPage === page ? "gainsboro" : "black" }}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;

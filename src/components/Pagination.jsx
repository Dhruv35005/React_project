import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPageNumbers = 5; 


  const getPageNumbers = () => {
    let pages = [];
    const half = Math.floor(maxPageNumbers / 2);

    if (totalPages <= maxPageNumbers) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= half + 1) {
      pages = [...Array(maxPageNumbers)].map((_, i) => i + 1);
    } else if (currentPage >= totalPages - half) {
      pages = [...Array(maxPageNumbers)].map((_, i) => totalPages - maxPageNumbers + 1 + i);
    } else {
      pages = [...Array(maxPageNumbers)].map((_, i) => currentPage - half + i);
    }

    return pages;
  };

  return (
    <div className="bg-gray-300 p-3 mt-6 flex justify-center items-center rounded-md shadow-md w-fit mx-auto space-x-2">
 
      <button
        className={`px-3 py-1 text-sm rounded-md transition duration-300 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500 hover:text-white"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>


      {currentPage > maxPageNumbers / 2 + 1 && totalPages > maxPageNumbers && (
        <>
          <button className="px-3 py-1 bg-gray-500 text-white rounded-md" onClick={() => onPageChange(1)}>1</button>
          <span className="px-2">...</span>
        </>
      )}

      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-md transition duration-300 ${
            currentPage === page ? "bg-blue-600 text-white" : "hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - Math.floor(maxPageNumbers / 2) && totalPages > maxPageNumbers && (
        <>
          <span className="px-2">...</span>
          <button className="px-3 py-1 bg-gray-500 text-white rounded-md" onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        </>
      )}

     
      <button
        className={`px-3 py-1 text-sm rounded-md transition duration-300 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500 hover:text-white"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;

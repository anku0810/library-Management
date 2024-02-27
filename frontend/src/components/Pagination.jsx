import React from 'react';
import './Pagination.css';

const Pagination = ({ booksPerPage, totalBooks, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(totalBooks / booksPerPage)) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <button 
            onClick={goToPreviousPage} 
            className="page-link"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button 
              onClick={() => paginate(number)} 
              className={`page-link ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button 
            onClick={goToNextPage} 
            className="page-link"
            disabled={currentPage === Math.ceil(totalBooks / booksPerPage)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

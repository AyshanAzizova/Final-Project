import React from 'react';
import './Pagination.css'; // Stil üçün

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

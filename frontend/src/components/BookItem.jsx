import React from 'react';
import './BookItem.css';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <div className="book-details">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Subject:</strong> {book.subject}</p>
        <p><strong>Publish Date:</strong> {book.publish_date}</p>
        
      </div>
    </div>
  );
};

export default BookItem;

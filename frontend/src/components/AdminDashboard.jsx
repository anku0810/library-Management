import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; 

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8081/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/books/${id}`);
      fetchAllBooks(); // Refresh the book list after deletion
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">Admin Dashboard</h1>
      <button className="add-btn">
        <Link to="/Admin/Add" className="add-link">
          Add Book
        </Link>
      </button>
      <br />
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h2 className="book-title">Book Title : {book.title}</h2>
            <p className="book-desc"><strong>Author : </strong>{book.author}</p>
            <p className="book-desc"><strong>Subject : </strong> {book.subject}</p>
            <p className="book-desc"><strong>Publish Date : </strong>{book.publish_date}</p>
            <div className="action-buttons">
              <button className="delete-btn" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <button className="update-btni">
                <Link
                  to={`/Admin/Update/${book.id}`}
                  className="update-link"
                >
                  Update
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

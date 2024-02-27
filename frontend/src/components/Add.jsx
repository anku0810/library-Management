import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Add.css";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    subject: "",
    publish_date: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://library-management-26dx.onrender.com/books", book);
      console.log("add book");
      navigate("/Admin/AdminDashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container">
    <div className="form-container">
      <h1>Add New Book</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Book Title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author Name"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Subject"
            value={book.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publish_date">Publish Date:</label>
          <input
            type="date"
            id="publish_date"
            name="publish_date"
            value={book.publish_date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Add Book
        </button>
        {error && <p className="error">Something went wrong!</p>}
      </form>
    <button className="booking"> <Link to="/Admin/AdminDashboard" className="see-all-books">
        See all books
      </Link>
      </button> 
    </div>
    </div>
  );
};

export default Add;

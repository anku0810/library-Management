import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Update.css"; // Import your CSS file

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    subject: "",
    publish_date: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // const bookId = location.pathname.split("/")[2];
  const bookId=book.id;
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick =(e) => {
    e.preventDefault();
    try {
      console.log("update book");
      axios.post(`https://library-management-26dx.onrender.com/books/${bookId}`, book);
      navigate("/Admin/AdminDashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="update-container">
    <div className="update-form">
      <h1>Update Book</h1>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
            className="update-input"
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            placeholder="Author"
            name="author"

            onChange={handleChange}
            className="update-input"
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
            className="update-input"
          />
        </div>
        <div className="form-group">
          <label>Publish Date:</label>
          <input
            type="date"
            placeholder="Publish_date"
            name="publish_date"
            onChange={handleChange}
            className="update-input"
          />
        </div>
      <button type ="submit" className="update-btns" onClick={handleClick}>
        Update
      </button>
      {error && <div className="error-msg">Something went wrong!</div>}
      <button className="clicking"><Link to="/Admin/AdminDashboard" className="link">
        See all books
      </Link>
      </button>
      </form>
    </div>
    </div>
  );
};

export default Update;
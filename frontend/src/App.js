import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import BookList from './components/BookList';
import FilterPanel from './components/FilterPanel';
import Pagination from './components/Pagination';
import Login from './components/Login';
import Admin from './components/Admin';
import data from './data/books.json';
import './App.css'; 
import Add from './components/Add';
import Update from './components/Update';
import AdminDashboard from './components/AdminDashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [books, setBooks] = useState(data);
  const [filteredBooks, setFilteredBooks] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const applyFilters = (filters) => {
    const filtered = data.filter(book => {
      return (
        book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
        book.subject.toLowerCase().includes(filters.subject.toLowerCase()) &&
        book.publishDate.toLowerCase().includes(filters.publishDate.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/" element ={<Login />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> 
          <Route path="/Admin" element={<Admin />} /> 
          <Route path="Admin/Add" element={<Add /> } />
          <Route path="Admin/Update/:id" element={<Update />} />
          <Route path = "/Admin/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
  
        {isAuthenticated && (
          <>
            <h1 className="title">Library Management System</h1>
            <div className="filter-container">
              <FilterPanel applyFilters={applyFilters} />
            </div>
            <div className="book-list-container">
              <BookList books={currentBooks} />
            </div>
            <div className="pagination-container">
              <Pagination
                booksPerPage={booksPerPage}
                totalBooks={filteredBooks.length}
                paginate={paginate}
              />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

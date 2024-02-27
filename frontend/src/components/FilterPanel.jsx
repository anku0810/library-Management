import React, { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ applyFilters, books, applyBookCountFilter }) => {
  const [filters, setFilters] = useState({
    title: '',
    author: '',
    subject: '',
    publish_date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleBookCountFilter = (value) => {
    setFilters({ ...filters, bookCount: value });
    if (typeof applyBookCountFilter === 'function') {
      applyBookCountFilter(value); // Apply the book count filter directly
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  const handleClearFilters = () => {
    setFilters({
      title: '',
      author: '',
      subject: '',
      publish_date: '',
    });
    applyFilters({
      title: '',
      author: '',
      subject: '',
      publish_date: '',
    });
  };

  return (
    <div className="filter-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Filter by Title"
          value={filters.title}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          type="text"
          name="author"
          placeholder="Filter by Author"
          value={filters.author}
          onChange={handleInputChange}
          className="filter-input"
        />
        <div className="dropdown">
          <select
            name="subject"
            value={filters.subject}
            onChange={handleInputChange}
            className="filter-input"
          >
            <option value="">Filter by Subject</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <input
          type="text"
          name="publishDate"
          placeholder="Filter by Publish Date"
          value={filters.publish_date}
          onChange={handleInputChange}
          className="filter-input"
        />
        <div className="button-group">
          <button type="submit" className="filter-button">Apply Filters</button>
          <button type="button" onClick={handleClearFilters} className="clear-button">Clear Filters</button>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;

import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating..."
        min="0"
        max="5"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ setSearchTerm, searchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      className="form-control form-control-lg me-1 input"
      placeholder="Search"
      onChange={handleSearch}
      value={searchTerm}
    />
  );
}
SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

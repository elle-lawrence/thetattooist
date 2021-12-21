import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;
  align-content: center; 
  margin-left: 5vw;
  padding-right: 5vw;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Nunito', sans-serif;

`;
export default function SearchBar({ setSearchTerm, searchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchBarDiv>
      <input
        className="form-control form-control-lg me-1 input"
        placeholder="search"
        onChange={handleSearch}
        value={searchTerm}
      />
    </SearchBarDiv>
  );
}
SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

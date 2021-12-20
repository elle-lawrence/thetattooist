import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioStyleDiv = styled.div`
  display: flex;
  color: #555555;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .form-check-label {
    color: #555555;
    font-family: 'Nunito', sans-serif;
  }
  .btn-style{
    border: none;
    color: #555555;
    font-family: 'Nunito', sans-serif;
  }

`;
export default function RadioGender({ setFilter, resetFilter }) {
  const selectGender = (e) => {
    const { value } = e.target;
    if (value === 'female') {
      setFilter('female');
    } else if (value === 'male') {
      setFilter('male');
    } else if (value === 'nonbinary') {
      setFilter('nonbinary');
    }
  };

  return (
    <RadioStyleDiv>
      <div className="form-check form-check-inline radioStyle">
        <input
          className="form-check-input "
          type="radio"
          name="gender"
          value="female"
          onChange={selectGender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio1"
        >
          Female
        </label>
      </div>
      <div className="form-check form-check-inline radioStyle">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="male"
          onChange={selectGender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
        >
          Male
        </label>
      </div>
      <div className="form-check form-check-inline radioStyle">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="nonbinary"
          onChange={selectGender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio3"
        >
          Non-Binary
        </label>
      </div>
      <button
        type="button"
        className="btn-outline-dark btn btn-style"
        onClick={resetFilter}
      >Clear Filter
      </button>
    </RadioStyleDiv>
  );
}

RadioGender.propTypes = {
  // filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};
// RadioGender.defaultProps = {
//   filter: null,
// };

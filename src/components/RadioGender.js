import React from 'react';
import PropTypes from 'prop-types';

export default function RadioGender({ filter, setFilter, resetFilter }) {
  const selectGender = (e) => {
    const { name } = e.target;
    if (name === 'female') {
      setFilter('female');
    } else if (name === 'male') {
      setFilter('male');
      console.warn(filter);
    } else if (name === 'nonbinary') {
      setFilter('nonbinary');
    }
  };

  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="female"
          onChange={selectGender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio1"
        >
          Female
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="male"
          onChange={selectGender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
        >
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="nonbinary"
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
        className="btn-outline-dark btn"
        onClick={resetFilter}
      >Clear Filter
      </button>
    </>
  );
}

RadioGender.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};
RadioGender.defaultProps = {
  filter: null,
};

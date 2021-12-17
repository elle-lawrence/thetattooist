import React from 'react';
import PropTypes from 'prop-types';

export default function RadioGender({ filter, setFilter }) {
//   const [gender, setGender] = useState('');

  const selectGender = (e) => {
    console.warn(e);
    const { id } = e.target;
    if (id === 'female') {
      setFilter('female');
      console.warn(id);
    } else if (id === 'male') {
      setFilter('male');
      console.warn(id);
    } else if (id === 'nonbinary') {
      setFilter('nonbinary');
      console.warn(id);
    }
  };
  console.warn(filter);
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="female"
          id="female"
          value={filter}
          onClick={selectGender}
        //   gender={gender}
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
          id="male"
          value={filter}
          onClick={selectGender}
        //   gender={gender}
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
          id="nonbinary"
          value={filter}
          onClick={selectGender}
        //   gender={gender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio3"
        >
          Non-Binary
        </label>
      </div>
    </>
  );
}

RadioGender.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
RadioGender.defaultProps = {
  filter: null,
};

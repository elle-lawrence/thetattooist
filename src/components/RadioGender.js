import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function RadioGender({ setFilter }) {
//   const [gender, setGender] = useState('');

  // const selectGender = (e) => {
  //   console.warn(e);
  //   const { id } = e.target;
  //   if (id === 'female') {
  //     setFilter('female');
  //     console.warn(id);
  //   } else if (id === 'male') {
  //     setFilter('male');
  //     console.warn(id);
  //   } else if (id === 'nonbinary') {
  //     setFilter('nonbinary');
  //     console.warn(id);
  //   }
  // };
  // console.warn(filter);

  // const App = () => {
  const [gender, setGender] = useState('');

  const handleChangeFemale = () => {
    setGender('female');
    setFilter(gender);
  };

  const handleChangeMale = () => {
    setGender('male');
    setFilter(gender);
  };

  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="female"
          id="female"
          value={gender}
          onChange={handleChangeFemale}
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
          value={gender}
          onChange={handleChangeMale}
        //   gender={gender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
        >
          Male
        </label>
      </div>
      {/* <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="nonbinary"
          id="nonbinary"
          value={gender}
          onClick={selectGender}
        //   gender={gender}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio3"
        >
          Non-Binary
        </label>
      </div> */}
    </>
  );
}

RadioGender.propTypes = {
  // filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
// RadioGender.defaultProps = {
//   filter: null,
// };

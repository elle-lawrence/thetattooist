import React from 'react';
import PropTypes from 'prop-types';

export default function RadioGender({ setSearchTerm }) {
//   const [gender, setGender] = useState('');

  const selectGender = (e) => {
    if (e.target.value === 'female') {
      setSearchTerm('female');
    } else if (e.target.value === 'male') {
      setSearchTerm('male');
    } else if (e.target.value === 'nonbinary') {
      setSearchTerm('nonbinary');
    }
  };
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="female"
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
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="male"
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
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="nonbinary"
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
//   searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func.isRequired,
};
// RadioGender.defaultProps = {
//   searchTerm: null,
// };

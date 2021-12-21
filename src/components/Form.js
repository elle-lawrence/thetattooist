import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { createArtist, updateArtist } from '../api/data/artists';

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 50vw;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Nunito', sans-serif;

.form-title {
    font-family: 'Nunito', sans-serif;
    #555555;
  }

  h5 {
    font-family: 'Nunito', sans-serif;
    #555555;
  }
`;

const initialState = {
  name: '',
  city: '',
  firebaseKey: '',
  gender: '',
  orientation: '',
  hourlyRt: '',
  instagram: '',
  availability: '',
  shopName: '',
  portfolioUrl: '',
  thumbnailImg: '',
};

export default function Form({ artist }) {
  const [formInput, setFormInput] = useState({
    ...initialState,
  });
  const history = useHistory();

  useEffect(() => {
    if (artist.firebaseKey) {
      setFormInput({
        name: artist.name,
        city: artist.city,
        firebaseKey: artist.firebaseKey,
        gender: artist.gender,
        orientation: artist.orientation,
        hourlyRt: artist.hourlyRt,
        instagram: artist.instagram,
        availability: artist.availability,
        shopName: artist.shopName,
        portfolioUrl: artist.portfolioUrl,
        thumbnailImg: artist.thumbnailImg,
      });
    }
  }, [artist]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist.firebaseKey) {
      updateArtist(formInput).then(() => {
        resetForm();
        history.push('/artists');
      });
    } else {
      createArtist(formInput).then(() => {
        resetForm();
        history.push('/artists');
      });
    }
  };

  return (
    <EntryForm onSubmit={handleSubmit}>
      <h2 className="form-title">{artist.firebaseKey ? 'EDIT' : 'SAVE'} artist</h2>
      <h5 className="form-title">
        {artist.firebaseKey
          ? 'Update artist below!'
          : 'Add artist below!'}
      </h5>
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="name"
        id="name"
        value={formInput.name}
        onChange={handleChange}
        placeholder="NAME"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="city"
        id="city"
        value={formInput.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="gender"
        id="gender"
        value={formInput.gender}
        onChange={handleChange}
        placeholder="Gender"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="orientation"
        id="orientation"
        value={formInput.orientation}
        onChange={handleChange}
        placeholder="Sexual Orientation"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="hourlyRt"
        id="hourlyRt"
        value={formInput.hourlyRt}
        onChange={handleChange}
        placeholder="Hourly Rate"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        name="availability"
        id="availability"
        value={formInput.availability}
        onChange={handleChange}
        placeholder="Average availability"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        name="shopName"
        id="shopName"
        value={formInput.shopName}
        onChange={handleChange}
        placeholder="Shop Name"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="url"
        name="shopUrl"
        id="shopUrl"
        value={formInput.shopUrl}
        onChange={handleChange}
        placeholder="Shop URL"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="url"
        name="instagram"
        id="instagram"
        value={formInput.instagram}
        onChange={handleChange}
        placeholder="Instagram URL"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        name="portfolioUrl"
        id="portfolioUrl"
        value={formInput.portfolioUrl}
        onChange={handleChange}
        placeholder="Portfolio URL"
      />
      <input
        className="form-control form-control-lg me-1 input"
        name="thumbnailImg"
        id="thumbnailImg"
        value={formInput.thumbnailImg}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        required
      />
      <button className="btn-outline-dark btn-styling" type="submit">
        {artist.firebaseKey ? 'UPDATE' : 'SUBMIT'}
      </button>
    </EntryForm>
  );
}

Form.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    hourlyRt: PropTypes.string,
    instagram: PropTypes.string,
    availability: PropTypes.string,
    shopName: PropTypes.string,
    shopUrl: PropTypes.string,
    portfolioUrl: PropTypes.string,
    thumbnailImg: PropTypes.string,
  }),
};

Form.defaultProps = { artist: {} };

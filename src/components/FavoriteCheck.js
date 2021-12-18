import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import userId from '../api/data/userId';
import { deleteFavorite, createFavorite } from '../api/data/favoritesData';

const initialState = {
  uid: '',
  firebaseKey: '',
  artistId: '',
  favorited: false,
};

export default function FavoriteCheck({ favArtist }) {
  const userInfo = userId();
  const [formInput, setFormInput] = useState({
    ...initialState,
    uid: userInfo.uid,
  });

  useEffect(() => {
    if (favArtist.firebaseKey) {
      console.warn(favArtist.firebaseKey);
      setFormInput({
        artistId: favArtist.firebaseKey,
        uid: userInfo.uid,
        firebaseKey: '',
      });
    }
  }, []);

  const handleSubmit = (fave) => {
    if (formInput?.firebaseKey) {
      deleteFavorite(formInput.firebaseKey).then(() => {});
    } else {
      createFavorite({ ...formInput, favorited: fave }).then(() => {});
      console.warn(formInput);
    }
  };

  const handleChecked = (favorite) => {
    if (favorite) {
      setFormInput((prevState) => ({
        ...prevState,
        favorited: false,
      }));
      handleSubmit(false);
    } else {
      setFormInput((prevState) => ({
        ...prevState,
        favorited: true,
      }));
      handleSubmit(true);
    }
  };

  return (
    <input
      name="favorited"
      type="checkbox"
      className="form-check-input"
      id="favorited"
      checked={formInput.favorited}
      onChange={() => handleChecked(formInput.favorited)}
    />
  );
}

FavoriteCheck.propTypes = {
  favArtist: PropTypes.shape({
    firebaseKey: PropTypes.string,
    favorited: PropTypes.bool,
    uid: PropTypes.string,
    artistId: PropTypes.string,
  }),
};

FavoriteCheck.defaultProps = {
  favArtist: {},
};

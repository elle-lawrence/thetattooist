import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import userId from '../api/data/userId';
import { deleteFavorite, createFavorite } from '../api/data/favoritesData';

const initialState = {
  uid: '',
  firebaseKey: '',
  artistId: '',
};

export default function FavoriteCheck({ favArtist }) {
  const userInfo = userId();
  const [formInput, setFormInput] = useState({
    ...initialState,
    uid: userInfo.uid,
  });
  const history = useHistory();

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

  const handleSubmit = () => {
    if (formInput?.firebaseKey) {
      deleteFavorite(formInput.firebaseKey).then();
    } else {
      createFavorite({ ...formInput }).then(() => {
        history.push('/artists');
      });
      console.warn(formInput);
    }
  };

  //   const handleChecked = (favorite) => {
  //     if (favorite) {
  //       setFormInput((prevState) => ({
  //         ...prevState,
  //       }));
  //       handleSubmit(false);
  //     }
  //   };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    handleSubmit(formInput);
  };

  return (
    <input
      name="favorited"
      type="checkbox"
      className="form-check-input"
      id="favorited"
      checked={formInput}
      onChange={handleChecked}
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createFavorite, getAllFavorites, deleteFavorite } from '../api/data/favoritesData';

export default function FavoriteCheck({ artist, user }) {
  const [isChecked, setIsChecked] = useState(false);
  const [fav, setFav] = useState({});

  const getIsFavorite = () => {
    getAllFavorites(user.uid).then((favorites) => {
      const artistFav = favorites.find((favorite) => favorite.artistId === artist.firebaseKey);
      setIsChecked(!!(artistFav?.firebaseKey));
      setFav(artistFav);
    });
  };

  useEffect(() => {
    getIsFavorite();
  }, []);

  const handleSubmit = (e) => {
    const { checked } = e.target;
    if (checked) {
      createFavorite({ artistId: artist.firebaseKey, uid: user.uid }).then(getIsFavorite);
    } else {
      deleteFavorite(fav).then(getIsFavorite);
    }
  };

  return (
    <input
      type="checkbox"
      className="form-check-input"
      checked={isChecked}
      onChange={handleSubmit}
    />
  );
}

FavoriteCheck.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  artist: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }).isRequired,
};

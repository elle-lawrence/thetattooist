import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VscHeart } from 'react-icons/vsc';
import { createFavorite, getAllFavorites, deleteFavorite } from '../api/data/favoritesData';

const Checkbox = styled.div`
  .checkboxStyle {
    background-color: #1B1A1A;
  }
`;
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
    <Checkbox>
      {/* <input
        type="checkbox"
        className="btn-check checkboxStyle form-check-input text-danger"
        id="btncheck1"
        autoComplete="off"
        checked={isChecked}
        onChange={handleSubmit}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor="btncheck1"
      > */}
      {/* </label> */}
      <VscHeart />
      <input
        type="checkbox"
        className="checkboxStyle form-check-input"
        checked={isChecked}
        onChange={handleSubmit}
      />
    </Checkbox>
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

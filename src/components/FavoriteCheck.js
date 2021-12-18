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
  const [isChecked, setIsChecked] = useState(false);
  const [fav, setFav] = useState({
    ...initialState,
    uid: userInfo.uid,
  });
  const history = useHistory();

  useEffect(() => {
    if (favArtist.firebaseKey) {
      //   console.warn(favArtist.firebaseKey);
      setIsChecked(true);
      setFav({
        artistId: favArtist.firebaseKey,
        uid: userInfo.uid,
        firebaseKey: fav.firebaseKey,
      });
    }
  }, []);

  const handleSubmit = () => {
    if (fav?.firebaseKey) {
      deleteFavorite(fav.firebaseKey).then();
    } else {
      createFavorite({ ...fav }).then(() => {
        history.push('/artists');
      });
      //   console.warn(fav);
    }
  };

  //   const handleChecked = (favorite) => {
  //     if (favorite) {
  //       setIsChecked((prevState) => ({
  //         ...prevState,
  //       }));
  //       handleSubmit(false);
  //     }
  //   };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: !checked,
    }));
    if (isChecked) {
      handleSubmit(fav);
    }
  };

  return (
    <input
      name="favorited"
      type="checkbox"
      className="form-check-input"
      id="favorited"
      checked={isChecked}
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

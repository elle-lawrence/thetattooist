import React, { useEffect, useState } from 'react';
import { getAllFavorites } from '../api/data/favoritesData';
import userId from '../api/data/userId';
// import PropTypes from 'prop-types';
import ArtistCard from '../components/ArtistCard';

export default function FavoritesView() {
  const [favArtists, setFavArtists] = useState([]);
  const userInfoObj = userId();

  useEffect(() => {
    let isMounted = true;
    getAllFavorites(userInfoObj).then((artists) => {
      if (isMounted) setFavArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {favArtists.map((favArtist) => (
        <ArtistCard
          key={favArtist.firebaseKey}
          favArtist={favArtist}
          // setFavArtists={setFavArtists}
        />
      ))}
      ;
    </>
  );
}
// Favorites.propTypes = {
//   user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
// };

// Favorites.defaultProps = {
//   user: null,
// };

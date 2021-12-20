import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFavoritedArtists } from '../api/data/favoritesData';
import FavCard from '../components/FavCard';

export default function FavoritesView({ user }) {
  const [favoritedArtists, setFavoritedArtists] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getFavoritedArtists(user.uid).then((favArtistArray) => {
      if (isMounted) setFavoritedArtists(favArtistArray);
    }); return () => {
      isMounted = false;
    };
  }, [favoritedArtists]);

  return (
    <>
      {favoritedArtists.map((favArtist) => (
        <FavCard
          key={favArtist.firebaseKey}
          favArtist={favArtist}
          // setFavArtists={setFavArtists}
          user={user}
        />
      ))}
      ;
    </>
  );
}
FavoritesView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

FavoritesView.defaultProps = {
  user: null,
};

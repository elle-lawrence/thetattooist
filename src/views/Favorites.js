import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFavoritedArtists } from '../api/data/favoritesData';
import FavCard from '../components/FavCard';
import { GroupButtonStyling } from './ShowAllArtists';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';

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
      <GroupButtonStyling>
        <SearchButtonGroup />
      </GroupButtonStyling>
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

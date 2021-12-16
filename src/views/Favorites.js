import React, { useEffect, useState } from 'react';
import { getAllArtists } from '../api/data/artists';
// import PropTypes from 'prop-types';
import ArtistCard from '../components/ArtistCard';

export default function Favorites() {
  const [favArtists, setFavArtists] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setFavArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {favArtists.map((artist) => (
        <ArtistCard
          key={artist.firebaseKey}
          artist={artist}
          setFavArtists={setFavArtists}
        />
      ))};
    </>
  );
}
// Favorites.propTypes = {
//   user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
// };

// Favorites.defaultProps = {
//   user: null,
// };

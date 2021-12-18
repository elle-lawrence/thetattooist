import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../components/ArtistCard';
import { getAllArtists } from '../api/data/artists';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';

export default function ShowAllArtists({ user }) {
  const [allArtists, setAllArtists] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setAllArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <SearchButtonGroup />
      {allArtists.map((artist) => (
        <ArtistCard
          key={artist.firebaseKey}
          artist={artist}
          setAllArtists={setAllArtists}
          user={user}
        />
      ))}
    </div>
  );
}

ShowAllArtists.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

ShowAllArtists.defaultProps = {
  user: null,
};

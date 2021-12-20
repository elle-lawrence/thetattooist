import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtistCard from '../components/ArtistCard';
import { getAllArtists } from '../api/data/artists';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';

const GroupButtonStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .btn-style{
    border: none;
    color: #555555;
    font-family: 'Nunito', sans-serif;
  }
`;
function ShowAllArtists({ user }) {
  const [allArtists, setAllArtists] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setAllArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, [allArtists]);

  return (
    <div>
      <GroupButtonStyling>
        <SearchButtonGroup user={user} />
      </GroupButtonStyling>
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

export { ShowAllArtists, GroupButtonStyling };

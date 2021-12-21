import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllArtists } from '../api/data/artists';
import ArtistCard from '../components/ArtistCard';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';
// import SearchBar from '../components/SearchBar';
import RadioGender from '../components/RadioGender';
import { CardContainerStyling, GroupButtonStyling } from './ShowAllArtists';

export default function SearchGender({ user }) {
  const [allArtists, setAllArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [shownArtists, setShownArtists] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);

  // Cache artists
  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setAllArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Searching

  useEffect(() => {
    const searchResults = allArtists.filter((artist) => artist.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchedArtists(searchResults);
  }, [searchTerm]);

  const resetSearchTerm = () => {
    setSearchTerm('');
    setSearchedArtists(allArtists);
  };

  // Handle Filtering
  useEffect(() => {
    if (filter) {
      const filterResults = allArtists.filter((artist) => artist.gender === filter);
      setFilteredArtists(filterResults);
    }
  }, [filter]);

  const resetFilter = () => {
    setFilter('');
    setFilteredArtists(allArtists);
  };

  // Display Artists
  useEffect(() => {
    const parsedArtists = filteredArtists.filter((filteredArtist) => searchedArtists.some(
      (searchedArtist) => filteredArtist.firebaseKey === searchedArtist.firebaseKey,
    ));
    setShownArtists(parsedArtists);
  }, [filteredArtists, searchedArtists]);

  useEffect(() => {
    resetFilter();
    resetSearchTerm();
  }, [allArtists]);

  return (
    <>
      <div>
        <GroupButtonStyling>
          <SearchButtonGroup user={user} />
        </GroupButtonStyling>
        {/* <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} /> */}
        <RadioGender
          setFilter={setFilter}
          filter={filter}
          resetFilter={resetFilter}
        />
      </div>
      <CardContainerStyling>
        {shownArtists.map((artist) => (
          <ArtistCard
            key={artist.firebaseKey}
            artist={artist}
            setAllArtists={setAllArtists}
            user={user}
          />
        ))}
      </CardContainerStyling>

    </>
  );
}

SearchGender.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

SearchGender.defaultProps = {
  user: null,
};

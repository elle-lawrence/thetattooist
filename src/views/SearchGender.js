import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllArtists } from '../api/data/artists';
import ArtistCard from '../components/ArtistCard';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';

export default function SearchGender({ user }) {
  const [allArtists, setAllArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [shownArtists, setShownArtists] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [gender, setGender] = useState('');

  const handleChangeFemale = () => {
    setGender('female');
    setFilter(gender);
  };

  const handleChangeMale = () => {
    setGender('male');
    setFilter(gender);
  };

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
      console.warn(filter);
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
    <div>
      <SearchButtonGroup />

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="female"
          id="female"
          value={gender}
          onChange={handleChangeFemale}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio1"
        >
          Female
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="male"
          id="male"
          value={gender}
          onChange={handleChangeMale}
        />
        <label
          className="form-check-label"
          htmlFor="inlineRadio2"
        >
          Male
        </label>
      </div>
      {shownArtists.map((artist) => (
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

SearchGender.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

SearchGender.defaultProps = {
  user: null,
};

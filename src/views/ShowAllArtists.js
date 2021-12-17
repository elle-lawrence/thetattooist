import React, { useState, useEffect } from 'react';
import ArtistCard from '../components/ArtistCard';
import { getAllArtists } from '../api/data/artists';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';

export default function ShowAllArtists() {
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
        />
      ))}
    </div>
  );
}

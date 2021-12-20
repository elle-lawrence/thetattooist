import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArtist } from '../api/data/artists';
import ArtistDetails from '../components/ArtistDetails';

export default function ArtistDetailsView() {
  const { key } = useParams();
  const [singleArtist, setSingleArtist] = useState({});
  // const [images, setImages] =
  useEffect(() => {
    getSingleArtist(key).then(setSingleArtist);
  }, []);

  return (
    <div>
      <>
        <ArtistDetails singleArtist={singleArtist} />
      </>
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailsButton from './buttons/DetailsButton';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import userId from '../api/data/userId';

const CardStyle = styled.div`
    width: 25rem;
    height: 25rem;
    margin: 20px;
    flex-basis: 2;
`;
export default function ArtistCard({ artist, setAllArtists }) {
  const userInfoObj = userId();
  return (
    <>
      <CardStyle className="card">
        <img src={artist.thumbnailImg} className="card-img-top" alt="thumbnail of Artist" height="70" width="70" />
        <div className="card-body">
          <h3 className="card-title">{artist.name}</h3>
          <h5 className="card-text">{artist.city}</h5>
          <h5>{artist.gender}</h5>
          <h5>{artist.orientation}</h5>
          <h5>Hourly Rate: {artist.hourlyRt}</h5>
          <h5>Average Availability: {artist.availability}</h5>
          <h5>Shop: {artist.shopName}</h5>
        </div>
      </CardStyle>
      {userInfoObj.isAdmin ? (
        <>
          <DetailsButton firebaseKey={artist.firebaseKey} singleArtist={artist} />
          <EditButton firebaseKey={artist.firebaseKey} />
          <DeleteButton
            firebaseKey={artist.firebaseKey}
            setAllArtist={setAllArtists}
          />
        </>
      ) : (
        <><DetailsButton firebaseKey={artist.firebaseKey} singleArtist={artist} /></>
      )}
    </>
  );
}

ArtistCard.propTypes = {
  // user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setAllArtists: PropTypes.func.isRequired,
  artist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    hourlyRt: PropTypes.string,
    instagram: PropTypes.string,
    availability: PropTypes.string,
    shopName: PropTypes.string,
    portfolioUrl: PropTypes.string,
    thumbnailImg: PropTypes.string,
  }).isRequired,
};

// ArtistCard.defaultProps = {
//   user: null,
// };

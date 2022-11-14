import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailsButton from './buttons/DetailsButton';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import FavoriteCheck from './FavoriteCheck';

const CardStyle = styled.div`
  display: flex;
  flex-basis: 2;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1B1A1A;
  font-family: 'Nunito', sans-serif;
  align-items: center;
  text-align: center;
  border-radius: 1px;
  margin: 20px;
  padding: 20px;
  width: 25rem;
  height: 35rem;
  color: gray;
  position: relative;
  z-index: 0;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0px 0px 10px 10px #555555;
  }
`;
const CardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .card-style {
    font-family: 'Nunito', sans-serif;
  }
`;
export default function ArtistCard({
  artist, setAllArtists, favArtist, user,
}) {
  return (
    <CardStyle>
      <CardStyle className="card">
        <img
          src={artist.thumbnailImg}
          className="card-img-top"
          alt="thumbnail of Artist"
          height="250"
          // width=""
        />
        <div className="card-style card-body">
          <h2 className="card-title">{artist.name}</h2>
          <h4 className="card-text">{artist.city}</h4>
          <h6>{artist.gender}</h6>
          <h6>{artist.orientation}</h6>
          <h6>Hourly Rate: ${artist.hourlyRt}</h6>
          <h6>Average Availability: {artist.availability}</h6>
          <h6>Shop: {artist.shopName}</h6>
        </div>
        <CardButtonContainer>
          {user?.isAdmin ? (
            <>
              <DetailsButton
                firebaseKey={artist.firebaseKey}
                singleArtist={artist}
              />
              <EditButton firebaseKey={artist.firebaseKey} />
              <DeleteButton
                firebaseKey={artist.firebaseKey}
                setAllArtist={setAllArtists}
              />
            </>
          ) : (
            <>
              <DetailsButton
                firebaseKey={artist.firebaseKey}
                singleArtist={artist}
              />
            </>
          )}
          {user ? (
            <FavoriteCheck favArtist={favArtist} artist={artist} user={user} />
          ) : (
            <></>
          )}

        </CardButtonContainer>
      </CardStyle>
    </CardStyle>
  );
}

ArtistCard.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // setFavArtists: PropTypes.func.isRequired,
  favArtist: PropTypes.shape({
    firebaseKey: PropTypes.string,
    favorited: PropTypes.bool,
    uid: PropTypes.string,
    artistId: PropTypes.string,
  }),
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

ArtistCard.defaultProps = {
  favArtist: {},
  user: null,
};

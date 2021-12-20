import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailsButton from './buttons/DetailsButton';
import FavoriteCheck from './FavoriteCheck';

const CardStyle = styled.div`
  width: 25rem;
  height: 25rem;
  margin: 20px;
  flex-basis: 2;
`;
export default function FavCard({ favArtist, user }) {
  return (
    <>
      <CardStyle className="card">
        <img
          src={favArtist.thumbnailImg}
          className="card-img-top"
          alt="thumbnail of Artist"
          height="70"
          width="70"
        />
        <div className="card-body">
          <h3 className="card-title">{favArtist.name}</h3>
          <h5 className="card-text">{favArtist.city}</h5>
          <h5>{favArtist.gender}</h5>
          <h5>{favArtist.orientation}</h5>
          <h5>Hourly Rate: {favArtist.hourlyRt}</h5>
          <h5>Average Availability: {favArtist.availability}</h5>
          <h5>Shop: {favArtist.shopName}</h5>
        </div>
      </CardStyle>
      <DetailsButton
        firebaseKey={favArtist.firebaseKey}
        singleArtist={favArtist}
      />
      <FavoriteCheck favArtist={favArtist} artist={favArtist} user={user} />
    </>
  );
}

FavCard.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  favArtist: PropTypes.shape({
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

FavCard.defaultProps = {
//   favArtist: {},
  user: null,
};

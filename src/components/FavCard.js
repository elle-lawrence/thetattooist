import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailsButton from './buttons/DetailsButton';
import FavoriteCheck from './FavoriteCheck';

const CardStyle = styled.div`
  width: 25rem;
  height: 35rem;
  margin: 20px;
  flex-basis: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito', sans-serif;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 1px;
  margin: 20px;
  box-shadow: 10px 10px 10px 0px;

  position: relative;
  z-index: 0;
  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 20px 0px;
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

export default function FavCard({ favArtist, user }) {
  return (
    <>
      <CardStyle className="card">
        <img
          src={favArtist.thumbnailImg}
          className="card-img-top"
          alt="thumbnail of Artist"
          height="250"
          // width="70"
        />
        <div className="card-body">
          <h3 className="card-title">{favArtist.name}</h3>
          <h5 className="card-text">{favArtist.city}</h5>
          <h5>{favArtist.gender}</h5>
          <h5>{favArtist.orientation}</h5>
          <h5>Hourly Rate: {favArtist.hourlyRt}</h5>
          <h5>Average Availability: {favArtist.availability}</h5>
          <h5>Shop: {favArtist.shopName}</h5>
          <CardButtonContainer>
            <DetailsButton
              firebaseKey={favArtist.firebaseKey}
              singleArtist={favArtist}
            />
            <FavoriteCheck favArtist={favArtist} artist={favArtist} user={user} />

          </CardButtonContainer>
        </div>
      </CardStyle>
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

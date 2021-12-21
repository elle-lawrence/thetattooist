import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
  align-items: center;

  .infoDiv {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-align: center;
  }
  .clickLink {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    font-size: 20px;
  }

`;

export default function ArtistDetails({ singleArtist }) {
  return (
    <>
      <DetailsContainer>
        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div> */}
        <img
          src={singleArtist.thumbnailImg}
          className="card-img-top"
          alt="thumbnail of Artist"
          height="500"
          // width=""
        />
        <div className="infoDiv">
          <h3>{singleArtist.name}</h3>
          <a className="clickLink" href={singleArtist.shopUrl}>{singleArtist.shopName}</a>
          <h5>{singleArtist.city}</h5>
          <h5>{singleArtist.gender}</h5>
          <h5>{singleArtist.orientation}</h5>
          <h5>${singleArtist.hourlyRt}</h5>
          <a className="clickLink" href={singleArtist.instagram}>instagram</a><br />
          <a className="clickLink" href={singleArtist.portfolioUrl}>portfolio</a>
          <h5>{singleArtist.availability}</h5>
        </div>

      </DetailsContainer>
    </>
  );
}

ArtistDetails.propTypes = {
  singleArtist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    hourlyRt: PropTypes.string,
    instagram: PropTypes.string,
    availability: PropTypes.string,
    shopName: PropTypes.string,
    shopUrl: PropTypes.string,
    portfolioUrl: PropTypes.string,
    thumbnailImg: PropTypes.string,
  }).isRequired,
};

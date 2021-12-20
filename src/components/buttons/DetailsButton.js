import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VscInfo } from 'react-icons/vsc';

export default function DetailsButton({ firebaseKey }) {
  return (
    <Link to={`/artists/${firebaseKey}`} className="btn-outline-dark btn">
      <VscInfo />
    </Link>
  );
}

DetailsButton.propTypes = {
  firebaseKey: PropTypes.string,
};

DetailsButton.defaultProps = {
  firebaseKey: '',
};

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VscEdit } from 'react-icons/vsc';

export default function EditButton({ firebaseKey }) {
  return (
    <Link to={`/edit/${firebaseKey}`} className="btn-outline-dark btn">
      <VscEdit />
    </Link>
  );
}

EditButton.propTypes = {
  firebaseKey: PropTypes.string,
};

EditButton.defaultProps = {
  firebaseKey: '',
};

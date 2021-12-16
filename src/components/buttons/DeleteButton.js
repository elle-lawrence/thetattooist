import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteArtist } from '../../api/data/artists';

export default function DeleteButton({ firebaseKey, setAllItems }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn-outline-dark btn"
      onClick={() => {
        deleteArtist(firebaseKey).then((allItems) => {
          setAllItems(allItems);
          history.push('/admin');
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

DeleteButton.propTypes = {
  firebaseKey: PropTypes.string,
  setAllItems: PropTypes.func,
};

DeleteButton.defaultProps = {
  firebaseKey: '',
  setAllItems: () => {},
};

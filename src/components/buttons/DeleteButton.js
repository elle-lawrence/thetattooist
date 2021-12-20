import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VscTrash } from 'react-icons/vsc';
import { deleteArtist } from '../../api/data/artists';

const AdminButtonStyling = styled.button`
  .btn-style {
    border: none;
    color: white;
    font-family: 'Nunito', sans-serif;
  }
`;

export default function DeleteButton({ firebaseKey, setAllItems }) {
  const history = useHistory();
  return (
    <>
      <AdminButtonStyling
        type="button"
        className="btn-style btn-outline-dark btn"
        onClick={() => {
          deleteArtist(firebaseKey).then((allItems) => {
            setAllItems(allItems);
            history.push('/artists');
          });
        }}
      >
        <VscTrash />
      </AdminButtonStyling>
    </>
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

import React from 'react';
import PropTypes from 'prop-types';
import SearchGenderButton from './SearchGenderButton';
import SearchNameButton from './SearchNameButton';
import SeeFavoritesButton from './SeeFavoritesButton';
import ShowAllButton from './ShowAllButton';

export default function SearchButtonGroup({ user }) {
  return (
    <div>
      <SearchNameButton user={user} />
      <SearchGenderButton user={user} />
      {user ? <SeeFavoritesButton user={user} /> : <></>}
      <ShowAllButton user={user} />
    </div>
  );
}

SearchButtonGroup.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

SearchButtonGroup.defaultProps = {
  user: null,
};

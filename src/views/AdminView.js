import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AdminView({ user }) {
  return (
    <>
      {user?.isAdmin ? (
        <h2>
          <Link className="linkStyling" to="/add">
            ADD ARTIST
          </Link>
        </h2>
      ) : (<h2>no</h2>)}
    </>
  );
}
AdminView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

AdminView.defaultProps = {
  user: null,
};

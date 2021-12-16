import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes({ user }) {
  return (
    <>
      <PublicRoutes user={user} />
      {user && <UserRoutes user={user} />}
      {user?.isAdmin && <AdminRoutes user={user} />}
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Routes.defaultProps = {
  user: null,
};

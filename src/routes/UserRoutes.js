import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorites from '../views/Favorites';

export default function UserRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/favorites" component={() => <Favorites user={user} />} />
    </Switch>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

UserRoutes.defaultProps = {
  user: null,
};

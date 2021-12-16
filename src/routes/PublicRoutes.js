import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import SearchBy from '../views/SearchBy';

import ArtistsDetailsView from '../views/ArtistDetailsView';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route exact path={['/', '/home']} component={Home} />
      <Route exact path="/artists" component={() => <SearchBy user={user} />} />
      <Route exact path="/artists/:key" component={ArtistsDetailsView} />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

PublicRoutes.defaultProps = {
  user: null,
};

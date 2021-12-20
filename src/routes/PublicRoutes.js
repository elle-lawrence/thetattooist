import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import { ShowAllArtists } from '../views/ShowAllArtists';
import ArtistsDetailsView from '../views/ArtistDetailsView';
import SearchName from '../views/SearchName';
import SearchGender from '../views/SearchGender';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path={['/', '/home']}
        component={() => <Home user={user} />}
      />
      <Route
        exact
        path="/artists"
        component={() => <ShowAllArtists user={user} />}
      />
      <Route exact path="/artists/:key" component={ArtistsDetailsView} />
      <Route
        exact
        path="/searchname"
        component={() => <SearchName user={user} />}
      />
      <Route
        exact
        path="/searchgender"
        component={() => <SearchGender user={user} />}
      />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

PublicRoutes.defaultProps = {
  user: null,
};

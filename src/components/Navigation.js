import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignOutButton from './buttons/SignOutButton';
import SignInButton from './buttons/SignInButton';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px dashed black;
`;

const NavContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-left: 20px;

  .linkStyling {
    padding-left: 20px;
    padding-right: 20px;
    color: white;
    font-size: 25px;
  }

  a:active {
    color: lightgrey;
  }

  a:hover {
    text-shadow: 2px 2px #a9a29e;
  }
`;

export default function Navigation({ user }) {
  return (
    <NavBar className="navbar navbar-dark bg-dark">
      <NavContainer className="container-fluid">
        <Link className="linkStyling" to="/home">
          HOME
        </Link>
        {user ? (
          <>
            <SignOutButton />
            <Link className="linkStyling" to="/favorites">
              Favorites
            </Link>
          </>
        ) : (
          <SignInButton />
        )}
        {user?.isAdmin ? (
          <>
            <Link className="linkStyling" to="/admin">
              ADMIN
            </Link>
          </>
        ) : (
          <></>
        )}
      </NavContainer>
    </NavBar>
  );
}

Navigation.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Navigation.defaultProps = {
  user: null,
};

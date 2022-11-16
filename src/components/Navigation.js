import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VscDiffAdded } from 'react-icons/vsc';
import SignOutButton from './buttons/SignOutButton';
import SignInButton from './buttons/SignInButton';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  background-color: #1B1A1A;

  .sc-jRQBWg gSGITA navbar navbar-dark bg-dark{
    background-color: transparent;
    padding: 0px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  column-gap: 10px;
  background-color: #1B1A1A;



  .linkStyling {
    padding-left: 20px;
    padding-right: 20px;
    color: #555555;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
  }

  a:active {
    color: lightgrey;
  }

  a:hover {
    text-shadow: 0 0 10px #FF58F9;
  }

  .sign-btn {
    border: none;
    color: #555555;
  }
`;

export default function Navigation({ user }) {
  return (
    <NavBar className="navbar-styling navbar navbar-dark bg-dark">
      <NavContainer className="container-fluid">
        <Link className="linkStyling" to="/home">
          the tattooist
        </Link>
        {user ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
        {user?.isAdmin ? (
          <>
            <Link className="linkStyling" to="/add">
              <VscDiffAdded />
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

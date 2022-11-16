// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { VscDiffAdded } from 'react-icons/vsc';
// import SignOutButton from './buttons/SignOutButton';
// import SignInButton from './buttons/SignInButton';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BungalowIcon from '@mui/icons-material/Bungalow';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const ref = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<BungalowIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// const NavBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 10px;
//   background-color: #1B1A1A;

//   .sc-jRQBWg gSGITA navbar navbar-dark bg-dark{
//     background-color: transparent;
//     padding: 0px;
//   }
// `;

// const NavContainer = styled.div`
//   display: flex;
//   column-gap: 10px;
//   background-color: #1B1A1A;

//   .linkStyling {
//     padding-left: 20px;
//     padding-right: 20px;
//     color: #555555;
//     font-size: 20px;
//     font-family: 'Nunito', sans-serif;
//     text-decoration: none;
//   }

//   a:active {
//     color: lightgrey;
//   }

//   a:hover {
//     text-shadow: 0 0 10px #FF58F9;
//   }

//   .sign-btn {
//     border: none;
//     color: #555555;
//   }
// `;

// export default function Navigation({ user }) {
//   return (
//     <NavBar className="navbar-styling navbar navbar-dark bg-dark">
//       <NavContainer className="container-fluid">
//         <Link className="linkStyling" to="/home">
//           the tattooist
//         </Link>
//         {user ? (
//           <>
//             <SignOutButton />
//           </>
//         ) : (
//           <SignInButton />
//         )}
//         {user?.isAdmin ? (
//           <>
//             <Link className="linkStyling" to="/add">
//               <VscDiffAdded />
//             </Link>
//           </>
//         ) : (
//           <></>
//         )}
//       </NavContainer>
//     </NavBar>
//   );
// }

// Navigation.propTypes = {
//   user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
// };

// Navigation.defaultProps = {
//   user: null,
// };

import { AppBar, Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(109, 161, 33)' : 'grey',
      fontFamily: 'Roboto',
      fontSize: '16px',
    };
  };
  return (
    <>
      <AppBar position="fixed" color="default">
        <Stack
          display="flex"
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'center', sm: 'flex-end' }}
          justifyContent="space-between"
          sx={{ mx: 2 }}
        >
          <figure className="header__logo">
            <img src={logo} alt="Wealth Health logo" />
            <figcaption>Wealth Health</figcaption>
          </figure>
          <Stack
            display="flex"
            direction="row"
            alignItems="flex-start"
            gap={2}
            sx={{ mb: 2 }}
          >
            <Box>
              <NavLink to="/home" style={navLinkStyle}>
                Home
              </NavLink>
            </Box>
            <Box>
              <NavLink to="/employees" style={navLinkStyle}>
                Employees
              </NavLink>
            </Box>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};

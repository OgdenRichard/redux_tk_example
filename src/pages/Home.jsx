import { NavLink, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { FormView } from '../features/form/FormView';

export const Home = () => {
  return (
    <>
      <h2>HRnet</h2>
      <Box sx={{ mb: 2 }}>
        <NavLink to="/employees" style={{ textDecoration: 'none' }}>
          View current employees
        </NavLink>
      </Box>
      <FormView />
    </>
  );
};

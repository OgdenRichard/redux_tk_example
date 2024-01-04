import { Card } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

export const Employees = () => {
  return (
    <>
      <Card variant="outlined">Employees table</Card>
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        Home
      </NavLink>
    </>
  );
};

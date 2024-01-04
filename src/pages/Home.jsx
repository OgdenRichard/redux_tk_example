import { NavLink, useNavigate } from 'react-router-dom';
import Tryout from '../components/Tryout';

export const Home = () => {
  return (
    <>
      <Tryout />
      <NavLink to="/employees" style={{ textDecoration: 'none' }}>
        View current employees
      </NavLink>
    </>
  );
};

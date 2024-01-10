import { NavLink } from 'react-router-dom';
import { EmployeesTable } from '../components/EmployeesTable';

export const Employees = () => {
  return (
    <>
      <EmployeesTable />
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        Home
      </NavLink>
    </>
  );
};

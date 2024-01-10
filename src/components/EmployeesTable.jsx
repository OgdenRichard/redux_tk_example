import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';

export const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.data);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.length &&
              employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.firstname}</TableCell>
                  <TableCell>{employee.lastname}</TableCell>
                  <TableCell>{employee.startdate}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.birthdate}</TableCell>
                  <TableCell>{employee.street}</TableCell>
                  <TableCell>{employee.city}</TableCell>
                  <TableCell>{employee.state}</TableCell>
                  <TableCell>{employee.zipcode}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

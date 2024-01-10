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
        <Table sx={{ minWidth: 650 }}>
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
            {employees.map((employee) => (
              <TableRow
                key={employee.id}
                sx={{ '& td': { borderRight: 0, borderLeft: 0 } }}
              >
                <TableCell>{employee.firstname}</TableCell>
                <TableCell align="right">{employee.lastname}</TableCell>
                <TableCell align="right">{employee.startdate}</TableCell>
                <TableCell align="right">{employee.department}</TableCell>
                <TableCell align="right">{employee.birthdate}</TableCell>
                <TableCell align="right">{employee.street}</TableCell>
                <TableCell align="right">{employee.city}</TableCell>
                <TableCell align="right">{employee.state}</TableCell>
                <TableCell align="right">{employee.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

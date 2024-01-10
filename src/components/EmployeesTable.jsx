import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { COLUMNS } from '../data/employeesColumns';

export const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.data);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <TableContainer component={Paper}>
        <Table {...getTableProps()} sx={{ minWidth: 650 }}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip Code</TableCell>
            </TableRow> */}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            {/* {employees.map((employee) => (
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
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

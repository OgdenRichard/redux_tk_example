import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
} from '@mui/material';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { useSelector } from 'react-redux';
import COLUMNS from '../data/employeesColumns';

export const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.data);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );
  return (
    <>
      <TableContainer component={Paper}>
        <Table {...getTableProps()} sx={{ minWidth: 650 }}>
          <TableHead>
            {headerGroups.map((headerGroup, hIndex) => (
              <TableRow key={hIndex} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, cIndex) => (
                  <TableCell
                    key={cIndex}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <TableCell key={index} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

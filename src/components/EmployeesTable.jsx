import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
  Box,
} from '@mui/material';
import { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { useSelector } from 'react-redux';
import COLUMNS from '../data/employeesColumns';
import { TableFilter } from './TableFilter';

export const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.data);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
  );

  const { globalFilter } = state;

  return (
    <>
      <Box display="flex" flexDirection="column">
        <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <TableContainer component={Paper}>
          <Table {...getTableProps()} sx={{ minWidth: 650, border: 0 }}>
            <TableHead>
              {headerGroups.map((headerGroup, hIndex) => (
                <TableRow key={hIndex} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, cIndex) => (
                    <TableCell
                      key={cIndex}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      sx={{ border: 0 }}
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
                  <TableRow
                    key={row.id}
                    {...row.getRowProps()}
                    sx={{ '& td': { borderRight: 0, borderLeft: 0 } }}
                  >
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
      </Box>
    </>
  );
};

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
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TablePagination,
} from '@mui/material';
import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { useSelector } from 'react-redux';
import { TableFilter } from './TableFilter';
import COLUMNS from '../data/employeesColumns';

export const EmployeesTable = () => {
  const employees = useSelector((state) => state.employees.data);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employees, [employees]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    gotoPage,
    prepareRow,
    setPageSize,
    pageCount,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const handleChange = (event, value) => {
    gotoPage(value - 1);
  };

  const firstRowNumber = () => {
    return pageSize * (pageIndex + 1) + 1 - pageSize;
  };

  const lastRowNumber = () => {
    return pageIndex + 1 === pageCount
      ? pageSize * (pageIndex + 1) - pageSize + (employees.length % pageSize)
      : pageSize * (pageIndex + 1);
  };

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <FormControl size="small">
              <InputLabel id="demo-simple-select-helper-label">Rows</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={pageSize}
                label="Rows"
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Box>
        <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
          <TableContainer component={Paper}>
            <Table {...getTableProps()} sx={{ border: 0 }}>
              <TableHead>
                {headerGroups.map((headerGroup, hIndex) => (
                  <TableRow key={hIndex} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, cIndex) => (
                      <TableCell
                        key={cIndex}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
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
                {page.map((row) => {
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
          <p>
            {firstRowNumber()} - {lastRowNumber()} of {employees.length} entries
          </p>
          <Pagination
            count={
              employees.length / pageSize > 1
                ? Math.ceil(employees.length / pageSize)
                : 1
            }
            page={pageIndex + 1}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};

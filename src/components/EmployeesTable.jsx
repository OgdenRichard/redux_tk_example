import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

export const EmployeesTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead></TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

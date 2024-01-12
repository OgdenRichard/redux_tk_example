import { format } from 'date-fns';

const COLUMNS = [
  {
    Header: 'First Name',
    accessor: 'firstname',
  },
  {
    Header: 'Last Name',
    accessor: 'lastname',
  },
  {
    Header: 'Start Date',
    accessor: 'startdate',
    Cell: ({ value }) => {
      return value ? format(new Date(value), 'dd/MM/yyyy') : '';
    },
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
  {
    Header: 'Date of birth',
    accessor: 'birthdate',
    Cell: ({ value }) => {
      return value ? format(new Date(value), 'dd/MM/yyyy') : '';
    },
  },
  {
    Header: 'Street',
    accessor: 'street',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Zip Code',
    accessor: 'zipcode',
  },
];

export default COLUMNS;

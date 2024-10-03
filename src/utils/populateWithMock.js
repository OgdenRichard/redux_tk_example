import mockdata from '../data/mockdata.json';

export const mockTableData = () => {
  const formattedMock = [];
  let index = 1;
  mockdata.forEach((employee) => {
    formattedMock.push({
      id: index,
      firstname: { val: employee.firstname },
      lastname: { val: employee.lastname },
      department: { val: employee.department },
      birthdate: employee.birthdate,
      startdate: employee.startdate,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipcode: employee.zipcode,
    });
    index += 1;
  });
  return formattedMock;
};

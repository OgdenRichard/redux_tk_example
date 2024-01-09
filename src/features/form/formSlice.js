import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formdata: {},
  employees: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.formdata.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.formdata.lastname = action.payload;
    },
    setBirthDate: (state, action) => {
      state.formdata.birthdate = action.payload;
    },
    setStartDate: (state, action) => {
      state.formdata.startdate = action.payload;
    },
    setStreet: (state, action) => {
      state.formdata.street = action.payload;
    },
    setCity: (state, action) => {
      state.formdata.city = action.payload;
    },
    setState: (state, action) => {
      state.formdata.state = action.payload;
    },
    setZipCode: (state, action) => {
      state.formdata.zipcode = action.payload;
    },
    setDepartment: (state, action) => {
      state.formdata.department = action.payload;
    },
    submitForm: (state) => {
      state.employees.push(state.formdata);
      state.formdata = {};
    },
  },
});

export default formSlice.reducer;
export const {
  setFirstName,
  setLastName,
  setBirthDate,
  setStartDate,
  setStreet,
  setCity,
  setState,
  setZipCode,
  setDepartment,
  submitForm,
} = formSlice.actions;

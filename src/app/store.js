import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';

const store = configureStore({
  reducer: {
    employees: formReducer,
  },
});

export default store;

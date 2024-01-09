import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers';
import { DropdownSelect } from '../../components/DropdownSelect';
import { states, departments } from '../../data/selectValues';
import {
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
} from './formSlice';

export const FormView = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FormControl>
        <FormLabel sx={{ mb: 2 }}>Create Employee</FormLabel>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <TextField
            variant="outlined"
            label="First Name"
            color="secondary"
            fullWidth
            onChange={(e) => dispatch(setFirstName(e.target.value))}
          />
          <TextField
            variant="outlined"
            label="Last Name"
            color="secondary"
            fullWidth
            onChange={(e) => dispatch(setLastName(e.target.value))}
          />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <DatePicker
            label="Date of Birth"
            slotProps={{ textField: { fullWidth: true, readOnly: true } }}
            onAccept={(val) =>
              dispatch(setBirthDate(val ? val.toISOString(true) : null))
            }
          />
          <DatePicker
            label="Start Date"
            slotProps={{ textField: { fullWidth: true, readOnly: true } }}
            onChange={(val) =>
              dispatch(setStartDate(val ? val.toISOString(true) : null))
            }
          />
        </Stack>
        <Stack
          sx={{
            border: 1,
            mb: 2,
            p: 2,
            borderRadius: 1,
            borderColor: 'grey.500',
          }}
        >
          <FormLabel sx={{ mb: 2 }}>Address</FormLabel>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <TextField
              variant="outlined"
              label="Street"
              color="secondary"
              fullWidth
              onChange={(e) => dispatch(setStreet(e.target.value))}
            />
            <TextField
              variant="outlined"
              label="City"
              color="secondary"
              fullWidth
              onChange={(e) => dispatch(setCity(e.target.value))}
            />
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <DropdownSelect
              data={states}
              datakey="key"
              label="state"
              reducer={setState}
              keyAsVal
            />
            <TextField
              variant="outlined"
              type="number"
              label="Zip Code"
              color="secondary"
              fullWidth
              onChange={(e) => dispatch(setZipCode(e.target.value))}
            />
          </Stack>
        </Stack>
        <DropdownSelect
          data={departments}
          datakey="key"
          label="department"
          reducer={setDepartment}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => dispatch(submitForm())}
        >
          Save
        </Button>
      </FormControl>
    </>
  );
};

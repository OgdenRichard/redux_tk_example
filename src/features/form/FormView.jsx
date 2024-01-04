import { Stack, Button, FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const FormView = () => {
  return (
    <>
      <FormControl>
        <TextField
          variant="outlined"
          label="First Name"
          color="secondary"
          sx={{ mb: 2 }}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          color="secondary"
          sx={{ mb: 2 }}
        />
        <DatePicker label="Date of Birth" sx={{ mb: 2 }} />
        <DatePicker label="Start Date" sx={{ mb: 2 }} />
        <Stack
          sx={{
            border: 1,
            mb: 2,
            p: 2,
            borderRadius: 1,
            borderColor: 'grey.500',
          }}
        >
          <TextField
            variant="outlined"
            label="Street"
            color="secondary"
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            label="City"
            color="secondary"
            sx={{ mb: 2 }}
          />
        </Stack>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </FormControl>
    </>
  );
};

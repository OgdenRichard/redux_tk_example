import { Button, FormControl, TextField } from '@mui/material';

function Tryout() {
  return (
    <>
      <FormControl>
        <TextField
          variant="outlined"
          label="Outlined"
          color="secondary"
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary">
          Hello world
        </Button>
      </FormControl>
      <div>hé salut</div>
    </>
  );
}

export default Tryout;

import { Typography, Divider, Box } from '@mui/material';

export const PageTitle = ({ title, variant, my }) => {
  return (
    <>
      <Box sx={{ my }}>
        <Typography variant={variant} component="h1" gutterBottom>
          {title}
        </Typography>
        <Divider orientation="horizontal" flexItem />
      </Box>
    </>
  );
};

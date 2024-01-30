import * as PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Root } from '../layouts/Root';
import { Home } from '../pages/Home';
import { Employees } from '../pages/Employees';
import { ErrorPage } from '../pages/ErrorPage';
import '../style/App.css';
import 'dayjs/locale/fr';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="employees" element={<Employees />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

function App({ children }) {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <RouterProvider router={router} />
        {children}

        <Stack className="switchmode" direction="row" sx={{ mt: 1.5, ml: 1.5 }}>
          {mode === 'dark' ? (
            <LightModeIcon
              fontSize="small"
              style={{ color: grey[500] }}
              onClick={() => setMode('light')}
            />
          ) : (
            <NightlightRoundOutlinedIcon
              fontSize="small"
              style={{ color: grey[700] }}
              onClick={() => setMode('dark')}
            />
          )}
        </Stack>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

App.defaultProps = {
  children: '',
};

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Root } from '../layouts/Root';
import { Home } from '../pages/Home';
import { Employees } from '../pages/Employees';
import { ErrorPage } from '../pages/ErrorPage';
import '../style/App.css';
import 'dayjs/locale/fr';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <RouterProvider router={router} />
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

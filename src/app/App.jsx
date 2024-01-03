import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CakeView } from '../features/cake/CakeView';
import Tryout from '../components/Tryout';
import '../style/App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Tryout />
        <CakeView />
      </div>
    </ThemeProvider>
  );
}

export default App;

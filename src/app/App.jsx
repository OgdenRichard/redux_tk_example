import { CakeView } from '../features/cake/CakeView';
import Tryout from '../components/Tryout';
import '../style/App.css';

function App() {
  return (
    <>
      <div className="App">
        <Tryout />
        <CakeView />
      </div>
    </>
  );
}

export default App;

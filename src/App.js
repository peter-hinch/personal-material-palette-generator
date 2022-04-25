import './App.css';
import ColorScheme from './components/ColorScheme';
import { Mode } from './palette';

function App() {
  return (
    <>
      <form>
        <input type="color" />
      </form>
      <ColorScheme mode={Mode.LIGHT} />
      <ColorScheme mode={Mode.DARK} />
    </>
  );
}

export default App;

import './App.css';
import ColorScheme from './components/ColorScheme';
import { ColorTheme } from './palette';

function App() {
  return (
    <>
      <form>
        <input type="color" />
      </form>
      <ColorScheme colorTheme={ColorTheme.LIGHT} />
      <ColorScheme colorTheme={ColorTheme.DARK} />
    </>
  );
}

export default App;

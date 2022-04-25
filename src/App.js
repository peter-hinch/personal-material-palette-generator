import { useState } from 'react';
import ColorScheme from './components/shared/ColorScheme';
import { ColorTheme } from './palette';

function App() {
  const [colorPrimary, setColorPrimary] = useState('#386a20');
  const [colorSecondary, setColorSecondary] = useState('#55624c');
  const [colorTertiary, setColorTertiary] = useState('#19686a');
  const [colorNeutral, setColorNeutral] = useState('#5d5f5a');
  const [colorNeutralVariant, setColorNeutralVariant] = useState('#5b6056');
  const [colorError, setColorError] = useState('#b3261e');

  return (
    <>
      <form>
        <input type="color" value={colorPrimary} />
        <input type="color" value={colorSecondary} />
        <input type="color" value={colorTertiary} />
        <input type="color" value={colorNeutral} />
        <input type="color" value={colorNeutralVariant} />
        <input type="color" value={colorError} />
      </form>
      <ColorScheme colorTheme={ColorTheme.LIGHT} />
      <ColorScheme colorTheme={ColorTheme.DARK} />
    </>
  );
}

export default App;

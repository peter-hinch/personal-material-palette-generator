import { useState } from 'react';
import ColorScheme from './components/shared/ColorScheme';
import KeyColorOptions from './components/shared/KeyColorOptions';
import { ColorTheme } from './palette';

function App() {
  const [colorPrimary, setColorPrimary] = useState({ h: 101, s: 54, l: 27 });
  const [colorSecondary, setColorSecondary] = useState({ h: 95, s: 13, l: 34 });
  const [colorTertiary, setColorTertiary] = useState({ h: 181, s: 62, l: 26 });
  const [colorNeutral, setColorNeutral] = useState({ h: 84, s: 3, l: 36 });
  const [colorNeutral2, setColorNeutral2] = useState({ h: 90, s: 5, l: 36 });
  const [colorError, setColorError] = useState({ h: 3, s: 71, l: 41 });

  return (
    <>
      <h1>Material Design 3 Color Palette Generator</h1>
      <form>
        <h2>Accent Colours</h2>
        <KeyColorOptions name="Primary Key Colour" color={colorPrimary} />
        <KeyColorOptions name="Secondary Key Colour" color={colorSecondary} />
        <KeyColorOptions name="Tertiary Key Colour" color={colorTertiary} />
        <h2>Neutral Colours</h2>
        <KeyColorOptions name="Neutral Key Colour" color={colorNeutral} />
        <KeyColorOptions
          name="Neutral Variant Key Colour"
          color={colorNeutral2}
        />
        <h2>Additional Colours</h2>
        <KeyColorOptions name="Error Key Colour" color={colorError} />
      </form>
      <ColorScheme colorTheme={ColorTheme.LIGHT} />
      <ColorScheme colorTheme={ColorTheme.DARK} />
    </>
  );
}

export default App;

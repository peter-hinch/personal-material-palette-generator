import { useState } from 'react';
import ColorScheme from './components/shared/ColorScheme';
import KeyColorOptions from './components/shared/KeyColorOptions';
import { PaletteKey, ColorTheme } from './palette';

function App() {
  const [colors, setColors] = useState({
    [PaletteKey.PRIMARY]: { h: 101, s: 54, l: 27 },
    [PaletteKey.SECONDARY]: { h: 95, s: 13, l: 34 },
    [PaletteKey.TERTIARY]: { h: 181, s: 62, l: 26 },
    [PaletteKey.NEUTRAL]: { h: 84, s: 3, l: 36 },
    [PaletteKey.NEUTRAL_VARIANT]: { h: 90, s: 5, l: 36 },
    [PaletteKey.ERROR]: { h: 3, s: 71, l: 41 }
  });

  return (
    <>
      <h1>Material Design 3 Color Palette Generator</h1>
      <form>
        <h2>Accent Colours</h2>
        <KeyColorOptions name="Primary Key Colour" color={colors.primary} />
        <KeyColorOptions name="Secondary Key Colour" color={colors.secondary} />
        <KeyColorOptions name="Tertiary Key Colour" color={colors.tertiary} />
        <h2>Neutral Colours</h2>
        <KeyColorOptions name="Neutral Key Colour" color={colors.neutral} />
        <KeyColorOptions
          name="Neutral Variant Key Colour"
          color={colors.neutralVariant}
        />
        <h2>Additional Colours</h2>
        <KeyColorOptions name="Error Key Colour" color={colors.error} />
      </form>
      <ColorScheme colors={colors} colorTheme={ColorTheme.LIGHT} />
      <ColorScheme colors={colors} colorTheme={ColorTheme.DARK} />
    </>
  );
}

export default App;

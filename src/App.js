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

  const handleColorChange = (event) => {
    // Capture the 3 components of the target's id tag.
    const idFormat = /^([a-z]+)-([a-z]+)-([a-z]+)$/i;
    // The regex exec() will return an array in the following format:
    // ['primary-h-range', 'primary', 'h', 'range']
    const idComponents = idFormat.exec(event.target.id);
    const paletteKey = idComponents[1];
    console.log('colors[paletteKey]', colors[paletteKey]);
    // Generate a new object using the regex components and the input value.
    const newColorSetting = { [idComponents[2]]: parseInt(event.target.value) };
    const newColorsObject = {
      ...colors,
      [paletteKey]: {
        ...colors[paletteKey],
        ...newColorSetting
      }
    };
    console.log('newColorsObject', newColorsObject);
    setColors(newColorsObject);
  };

  return (
    <div className="container">
      <h1>Material Design 3 Color Palette Generator</h1>
      <form>
        <h2>Accent Colours</h2>
        <KeyColorOptions
          name="Primary Key Colour"
          colorKey={PaletteKey.PRIMARY}
          color={colors[PaletteKey.PRIMARY]}
          handleColorChange={handleColorChange}
        />
        <KeyColorOptions
          name="Secondary Key Colour"
          colorKey={PaletteKey.SECONDARY}
          color={colors[PaletteKey.SECONDARY]}
          handleColorChange={handleColorChange}
        />
        <KeyColorOptions
          name="Tertiary Key Colour"
          colorKey={PaletteKey.TERTIARY}
          color={colors[PaletteKey.TERTIARY]}
          handleColorChange={handleColorChange}
        />
        <h2>Neutral Colours</h2>
        <KeyColorOptions
          name="Neutral Key Colour"
          colorKey={PaletteKey.NEUTRAL}
          color={colors[PaletteKey.NEUTRAL]}
          handleColorChange={handleColorChange}
        />
        <KeyColorOptions
          name="Neutral Variant Key Colour"
          colorKey={PaletteKey.NEUTRAL_VARIANT}
          color={colors[PaletteKey.NEUTRAL_VARIANT]}
          handleColorChange={handleColorChange}
        />
        <h2>Additional Colours</h2>
        <KeyColorOptions
          name="Error Key Colour"
          colorKey={PaletteKey.ERROR}
          color={colors[PaletteKey.ERROR]}
          handleColorChange={handleColorChange}
        />
      </form>
      <ColorScheme colors={colors} colorTheme={ColorTheme.LIGHT} />
      <ColorScheme colors={colors} colorTheme={ColorTheme.DARK} />
    </div>
  );
}

export default App;

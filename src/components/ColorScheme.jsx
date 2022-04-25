import Swatch from './shared/Swatch';
import { ColorTheme, PaletteLight, PaletteDark } from './../palette';

const ColorScheme = ({ colorTheme }) => {
  let scheme;
  if (colorTheme === ColorTheme.LIGHT) {
    scheme = PaletteLight;
  } else {
    scheme = PaletteDark;
  }

  const renderPaletteItems = Object.entries(scheme).map(
    ([key, paletteItem]) => <Swatch key={key} paletteItem={paletteItem} />
  );

  return <div>{renderPaletteItems}</div>;
};

export default ColorScheme;

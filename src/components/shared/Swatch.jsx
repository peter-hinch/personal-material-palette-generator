import { calculateTone } from '../../colorConversion';

const Swatch = ({ colors, paletteItem }) => {
  const swatchColorStyle = () => {
    let keyHue = colors[paletteItem.colorKey].h;
    let keySaturation = colors[paletteItem.colorKey].s;
    let keyLightness = colors[paletteItem.colorKey].l;
    let foregroundLightness = calculateTone(
      keyLightness,
      paletteItem.foregroundTone
    );
    let backgroundLightness = calculateTone(
      keyLightness,
      paletteItem.backgroundTone
    );

    return {
      color: `hsl(${keyHue}, ${keySaturation}%, ${foregroundLightness}%)`,
      backgroundColor: `hsl(${keyHue}, ${keySaturation}%, ${backgroundLightness}%)`
    };
  };

  return (
    <div className="scheme-swatch" style={swatchColorStyle()}>
      <h3>{paletteItem.swatchName}</h3>
      <div>
        <small>
          {paletteItem.keyDisplayName}
          {paletteItem.backgroundTone}
        </small>
      </div>
    </div>
  );
};

export default Swatch;

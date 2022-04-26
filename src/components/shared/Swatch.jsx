import { calculateTone } from '../../colorConversion';

const Swatch = ({ paletteItem }) => {
  const backgroundColorStyle = {
    color: 'white',
    backgroundColor: 'grey'
  };

  return (
    <div className="scheme-swatch" style={backgroundColorStyle}>
      <div>{paletteItem.swatchName}</div>
      <div>
        <small>
          {paletteItem.key}
          {paletteItem.foregroundTone}
        </small>
      </div>
      <div>
        <small>
          {paletteItem.key}
          {paletteItem.backgroundTone}
        </small>
      </div>
    </div>
  );
};

export default Swatch;

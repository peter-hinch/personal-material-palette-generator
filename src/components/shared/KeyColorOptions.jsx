import RangeInput from './RangeInput';
import { calculateTone } from '../../colorConversion';

const KeyColorOptions = ({ name, color }) => {
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

  const tonalVariationStyle = (tone) => {
    let adjustedLum = calculateTone(color.l, tone);
    let textColor;

    if (tone < 50) {
      textColor = 'white';
    } else {
      textColor = 'black';
    }

    return {
      color: textColor,
      backgroundColor: `hsl(${color.h}, ${color.s}%, ${adjustedLum}%)`
    };
  };

  return (
    <div className="key-container">
      <h3>{name}</h3>
      <div className="key-color">
        <div
          className="key-swatch"
          style={{
            background: `hsl(${color.h}, ${color.s}%, ${color.l}%)`
          }}
        >
          &nbsp;
        </div>
        <div className="key-sliders">
          <RangeInput label="Hue" min={0} max={359} value={color.h} />
          <RangeInput label="Saturation" min={0} max={100} value={color.s} />
          <RangeInput label="Lightness" min={25} max={55} value={color.l} />
        </div>
        <ul className="key-tones">
          {tones.map((tone) => (
            <li
              className="key-tone"
              key={tone}
              style={tonalVariationStyle(tone)}
            >
              {tone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeyColorOptions;

import RangeInput from './RangeInput';
import { calculateTone } from '../../colorConversion';
import { ColorComponent } from '../../palette';

const KeyColorOptions = ({ name, colorKey, color, handleColorChange }) => {
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

  const tonalVariationStyle = (tone) => {
    let adjustedLum = calculateTone(color.l, tone);
    let textColor = tone < 50 ? 'white' : 'black';

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
          <RangeInput
            colorKey={colorKey}
            colorComponent={ColorComponent.HUE}
            min={0}
            max={359}
            value={color.h}
            handleColorChange={handleColorChange}
          />
          <RangeInput
            colorKey={colorKey}
            colorComponent={ColorComponent.SATURATION}
            min={0}
            max={100}
            value={color.s}
            handleColorChange={handleColorChange}
          />
          <RangeInput
            colorKey={colorKey}
            colorComponent={ColorComponent.LIGHTNESS}
            min={25}
            max={55}
            value={color.l}
            handleColorChange={handleColorChange}
          />
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

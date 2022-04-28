import RangeInput from './RangeInput';
import { calculateTone } from '../../colorConversion';
import { ColorComponent } from '../../palette';

const KeyColorOptions = ({ name, colorKey, color, handleColorChange }) => {
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

  const generateHsl = (tone) => {
    let adjustedLum = calculateTone(color.l, tone);
    return `hsl(${color.h}, ${color.s}%, ${adjustedLum}%)`;
  };

  const tonalVariationStyle = (tone) => {
    let backgroundColor = generateHsl(tone);
    let textColor = tone < 50 ? 'white' : 'black';

    return {
      color: textColor,
      backgroundColor: backgroundColor
    };
  };

  const handleToneClick = (event, tone) => {
    event.preventDefault();
    let colorString = generateHsl(tone);
    console.log('tone clicked', colorString);
  };

  return (
    <div className="key-color">
      <button
        className="key-swatch"
        style={{
          color: 'white',
          background: generateHsl(40)
        }}
        onClick={(event) => handleToneClick(event, 40)}
      >
        <h3>{name} Key Colour</h3>
      </button>
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

      <div className="key-tones">
        {tones.map((tone) => (
          <button
            className="key-tone"
            key={tone}
            style={tonalVariationStyle(tone)}
            onClick={(event) => handleToneClick(event, tone)}
          >
            <small>{tone}</small>
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyColorOptions;

import RangeInput from './RangeInput';

const KeyColorOptions = ({ name, color }) => {
  // Note: tones are not mapped directly to lightness values of 0 - 100, the
  // key color is set to the tone named 40 and other values are extrapolated
  // from that value.
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];
  const tonalVariationStyle = (tone) => ({
    backgroundColor: `hsl(${color.h}, ${color.s}%, ${(color.l / 40) * tone}%)`
  });

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

const KeyColorOptions = ({ name, color }) => {
  return (
    <div>
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
          <label>
            Hue
            <input type="range" min={0} max={360} value={color.h} />
          </label>
          <label>
            Saturation
            <input type="range" min={0} max={100} value={color.s} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default KeyColorOptions;

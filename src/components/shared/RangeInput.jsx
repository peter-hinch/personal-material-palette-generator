const RangeInput = ({
  colorKey,
  colorComponent,
  min,
  max,
  value,
  handleColorChange
}) => {
  const inputRangeId = `${colorKey}-${colorComponent}-range`;
  const inputNumberId = `${colorKey}-${colorComponent}-number`;

  return (
    <div>
      <label htmlFor={inputRangeId}>{colorComponent}</label>
      <input
        type="range"
        id={inputRangeId}
        min={min}
        max={max}
        value={value}
        onChange={handleColorChange}
      />
      <label hidden htmlFor={inputNumberId}>
        {colorComponent}
      </label>
      <input
        type="number"
        id={inputNumberId}
        min={min}
        max={max}
        value={value}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default RangeInput;

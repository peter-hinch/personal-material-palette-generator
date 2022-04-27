const RangeInput = ({
  colorKey,
  label,
  min,
  max,
  value,
  handleColorChange
}) => {
  const inputRangeId = `${colorKey}-${label}-range`;
  const inputNumberId = `${colorKey}-${label}-number`;

  return (
    <div>
      <label htmlFor={inputRangeId}>{label}</label>
      <input
        type="range"
        id={inputRangeId}
        min={min}
        max={max}
        value={value}
        onChange={handleColorChange}
      />
      <label hidden htmlFor={inputNumberId}>
        {label}
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

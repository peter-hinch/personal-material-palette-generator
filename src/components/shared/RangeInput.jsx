const RangeInput = ({ label, min, max, value, handleColorChange }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleColorChange}
        />
      </label>
      <input type="number" value={value} onChange={handleColorChange} />
    </div>
  );
};

export default RangeInput;

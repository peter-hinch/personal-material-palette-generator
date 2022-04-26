const RangeInput = ({ label, min, max, value }) => {
  return (
    <div>
      <label>
        {label}
        <input type="range" min={min} max={max} value={value} />
      </label>
      <input type="number" value={value} />
    </div>
  );
};

export default RangeInput;

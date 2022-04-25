const Swatch = ({ paletteItem }) => {
  return (
    <div
      className="swatch"
      style={{
        backgroundColor: 'grey',
        display: 'inline-block'
      }}
    >
      <div>{paletteItem.swatchName}</div>
    </div>
  );
};

export default Swatch;

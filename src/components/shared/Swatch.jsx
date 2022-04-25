const Swatch = ({ paletteItem }) => {
  const backgroundColorStyle = {
    backgroundColor: 'grey'
  };

  return (
    <div className="swatch" style={backgroundColorStyle}>
      <div>{paletteItem.swatchName}</div>
      <div>
        <small>{paletteItem.foregroundColor}</small>
      </div>
      <div>
        <small>{paletteItem.backgroundColor}</small>
      </div>
    </div>
  );
};

export default Swatch;

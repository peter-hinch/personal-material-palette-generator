const validateHex = (string) => {
  // Match hex format: "#000 - #fff" or "#000000 - #ffffff" (case insensitive).
  let pattern = /^(#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3})$/i;
  console.log(pattern.exec(string));
  return pattern.exec(string);
};

const validateHsl = (string) => {
  // Match HSL format: "hsl(0, 0%, 0%) - hsl(360, 100%, 100%)".
  let pattern =
    /^hsl\(([012]?[0-9][0-9]?|3[0-5][0-9]|360), ([0-9]|[1-9][0-9]|100)%, ([0-9]|[1-9][0-9]|100)%\)$/;
  console.log(pattern.exec(string));
  return pattern.exec(string);
};

// Calculate tone based on Material Design 3 specification for a given tonal
// value in the range 0-100
export const calculateTone = (keyLightness, tone) => {
  // Note: tones are not mapped directly to lightness values of 0 - 100, the
  // key color is set to the tone '40' and other values are extrapolated
  // from that value.
  if (tone >= 0 && tone < 40) {
    // For tones 0-40 the values are evenly distributed
    // between 0 (black) - keyLightness
    return parseInt((keyLightness / 40) * tone);
  } else if (tone === 40) {
    // The provided tone can be returned unchanged.
    return keyLightness;
  } else if (tone > 40 && tone < 100) {
    // For tones 40-100 the values are evenly distributed
    // between keyLightness - 100 (white)
    return parseInt(101 - ((100 - keyLightness) / 59) * (100 - tone));
  } else if (tone === 100) {
    return 100;
  } else {
    return undefined;
  }
};

export const hexToHsl = (stringHex) => {
  validateHex(stringHex);
};

export const hslToHex = (stringHsl) => {
  validateHsl(stringHsl);
};

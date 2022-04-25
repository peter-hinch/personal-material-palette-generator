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

export const hexToHsl = (stringHex) => {
  validateHex(stringHex);
};

export const hslToHex = (stringHsl) => {
  validateHsl(stringHsl);
};

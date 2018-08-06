const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    let cs = codeSet(code);
    shift = shift%cs;
    return String.fromCharCode(
      mod(code + shift - cs, 26) + cs
    );
  }
  return char;
};

module.exports = caesar;

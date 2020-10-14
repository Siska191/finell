module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("There is not a space in a number");
    return string.replace(/\s/g, "");
  };
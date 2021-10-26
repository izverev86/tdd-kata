const delimeters = [",", "\\n"];

const Add = (text) => {
  const indexOfSlashes = text.indexOf("//");
  if (indexOfSlashes != -1) {
    delimeters.push(text[indexOfSlashes + 2]);
  }
  const regexp = `([^(${delimeters.join("|")})]+)`;
  const splitted = text.split(new RegExp(regexp));

  return splitted
    .filter((x) => !isNaN(parseInt(x, 10)))
    .reduce((prev, cur) => {
        if(parseInt(cur, 10) < 0) throw new TypeError("Negative numbers not allowed")
        return parseInt(prev, 10) + parseInt(cur, 10)
    }, 0);
};

module.exports = Add;

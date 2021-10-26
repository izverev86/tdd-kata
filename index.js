const delimeters = [",", "\n"];

const Add = (text) => {
  const splitted = text.split(/([^(,|\n)]+)/g)

  return splitted
    .filter(x => !isNaN(parseInt(x, 10)))
    .reduce((prev, cur) => parseInt(prev, 10) + parseInt(cur, 10), 0)
};

module.exports = Add;

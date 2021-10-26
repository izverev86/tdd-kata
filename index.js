const Add = (text) => {
  const value = parseInt(text, 10);

  if (!isNaN(value)) return value;

  return 0;
};

module.exports = Add;

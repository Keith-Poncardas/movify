
const isValidSecretKey = (key) => {
  return key === process.env.SECRET_KEY;
};

module.exports = { isValidSecretKey };
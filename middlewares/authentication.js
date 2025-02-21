const { isValidSecretKey } = require('../utils/secretKeyValidator');
const MovifyError = require('../error/errorHandler');

/**
 * Middleware to validate the secret key from the request query parameters.
 * If the secret key is missing or invalid, the user is redirected to the '/movie' route.
 * If the secret key is valid, the request proceeds to the next middleware or route handler.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters of the request.
 * @param {string} req.query.secretKey - The secret key to be validated.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware or route handler.
 */
function validateSecretKey(req, res, next) {
  const { secretKey } = req.query;

  if (!secretKey || !isValidSecretKey(secretKey)) {
    next(new MovifyError('Invalid Secret Key', 401));
  };

  console.log("Authentication successful!");
  next();
};

module.exports = { validateSecretKey };

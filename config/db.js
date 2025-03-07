const mongoose = require('mongoose');
const MovifyError = require('../error/errorHandler');


/**
 * Asynchronously connects to the MongoDB database using the connection string
 * provided in the environment variable `MONGO_URI`.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves if the database connection is successful.
 * @throws {Error} Throws an error if the database connection fails.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected succesfully!');
  } catch (err) {
    console.log(`Error connecting database: ${err.message}`);
    throw new MovifyError('Error Connecting To Database', 500);
  };
};

module.exports = connectDB;
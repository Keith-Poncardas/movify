const mongoose = require('mongoose');

/**
 * Async function to connect MongoDB.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Include the MONGO_URI from ENV.
    console.log('Database connected succesfully!'); // Log if database is connected.
  } catch (err) {
    console.log(`Error connecting database: ${err.message}`); // Log error if database failed.
  };
};

module.exports = connectDB; // Export connectDB.
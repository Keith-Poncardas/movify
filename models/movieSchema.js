const mongoose = require('mongoose');

/**
 * Movie schema instance.
 */
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  duration: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 10 },
  cast: [{ type: String }],
  description: { type: String },
  language: { type: String, default: 'English' },
  country: { type: String, default: 'USA' },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

/**
 * Create a model based on your shema.
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie; // Export movie.
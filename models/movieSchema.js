const mongoose = require('mongoose');

/**
 * Movie Schema
 * 
 * This schema defines the structure for movie documents in the database.
 * 
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie. Required.
 * @property {string} genre - The genre of the movie. Required.
 * @property {string} director - The director of the movie. Required.
 * @property {number} releaseYear - The release year of the movie. Required.
 * @property {number} duration - The duration of the movie in minutes. Required.
 * @property {number} rating - The rating of the movie, ranging from 0 to 10.
 * @property {string[]} cast - The cast of the movie.
 * @property {string} description - A brief description of the movie.
 * @property {string} language - The language of the movie. Defaults to 'English'.
 * @property {string} country - The country where the movie was produced. Defaults to 'USA'.
 * @property {string} imageUrl - The URL of the movie's image. Required.
 * @property {Date} createdAt - The date when the movie document was created. Automatically generated.
 * @property {Date} updatedAt - The date when the movie document was last updated. Automatically generated.
 */
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: {
    type: String,
    required: true,
    enum: [
      'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
      'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror',
      'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'
    ],
  },
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
 * Represents a Movie model.
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie.
 * @property {string} director - The director of the movie.
 * @property {number} releaseYear - The release year of the movie.
 * @property {string[]} genres - The genres of the movie.
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
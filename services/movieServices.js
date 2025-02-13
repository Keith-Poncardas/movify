const Movie = require('../models/movieSchema');

/**
 * Creates a new movie record in the database.
 *
 * @param {Object} data - The data for the new movie.
 * @param {string} data.title - The title of the movie.
 * @param {string} data.director - The director of the movie.
 * @param {string} data.genre - The genre of the movie.
 * @param {number} data.year - The release year of the movie.
 * @returns {Promise<Object>} The created movie record.
 */
const createMovie = async (data) => {
  return await Movie.create(data);
};

/**
 * Retrieves a list of movies from the database, sorted by the most recently updated.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 */
const getMovies = async () => {
  return await Movie.find().sort({ updatedAt: -1 });
};

/**
 * Updates a movie document in the database with the given data.
 *
 * @param {string} id - The ID of the movie to update.
 * @param {Object} data - The data to update the movie with.
 * @returns {Promise<Object>} The updated movie document.
 */
const updateMovie = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

/**
 * Deletes a movie by its ID.
 *
 * @param {string} id - The ID of the movie to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted movie document, or null if no document was found.
 */
const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

/**
 * Retrieves a movie by its ID.
 *
 * @param {string} id - The ID of the movie to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the movie object if found, or null if not found.
 */
const getMovieID = async (id) => {
  return await Movie.findById(id);
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie, getMovieID };
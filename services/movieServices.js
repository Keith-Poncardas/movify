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
 * Retrieves a list of movies based on the provided query and sort options.
 *
 * @param {string} [query] - The genre to filter movies by. If not provided, all genres are included.
 * @param {string} [sort] - The sorting option for the movies. Can be 'Most Popular' or 'Latest'.
 *                          Defaults to sorting by the most recently updated movies.
 * @returns {Promise<Array>} A promise that resolves to an array of movies matching the filter and sort criteria.
 */
const getMovies = async (query, sort) => {
  const filter = query ? { genre: query } : {};
  let sortOption = { updatedAt: -1 };

  if (sort === 'Most Popular') {
    sortOption = { rating: -1 };
  } else if (sort === 'Latest') {
    sortOption = { releaseYear: -1 };
  };

  return await Movie.find(filter).sort(sortOption);
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
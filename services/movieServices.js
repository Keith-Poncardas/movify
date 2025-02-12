const Movie = require('../models/movieSchema');

/**
 * Async function to movie directly to a database.
 */
const createMovie = async (data) => {
  return await Movie.create(data);
};

/**
 * Async function to get all movies from database.
 */
const getMovies = async () => {
  return await Movie.find();
};

/**
 * Async function to update movie by ID.
 */
const updateMovie = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

/**
 * Async function to delete movie by ID.
 */
const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

/**
 * Async function to get movie by ID.
 */
const getMovieID = async (id) => {
  return await Movie.findById(id);
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie, getMovieID }; // Export all functions.
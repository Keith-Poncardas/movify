const movieService = require('../services/movieServices');
const formHelper = require('../utils/formHelper');
const headHelper = require('../utils/headHelper');
const defaults = require('../constant/defaultSeo');

/**
 * Async function to create movie.
 */
const createMovie = async (req, res) => {
  try {
    await movieService.createMovie(req.body);
    res.redirect('/');
  } catch (err) {
    console.log(`Error creating movie: ${err.message}`);
  };
};

/**
 * Async function to get all movies.
 */

const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    const head = headHelper.optimizeSEO({}, defaults.homeDefault);
    res.render('home', { movies, head });
  } catch (err) {
    console.log(`Error getting movie: ${err.message}`);
  };
};

/**
 * Async function to update movie.
 */
const updateMovie = async (req, res) => {
  try {
    await movieService.updateMovie(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    console.log(`Error updating movie: ${err.message}`);
  };
};

/**
 * Async function to delete movie.
 */
const deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovie(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log(`Error deleting movie: ${err.message}`);
  };
};

const getMovie = async (req, res) => {
  try {
    const movie = await movieService.getMovieID(req.params.id);
    const head = headHelper.optimizeSEO(movie);
    res.render('view', { movie, head });
  } catch (err) {
    console.log(`Error getting movie: ${err.message}`);
  };
};

/**
 * Async function to get ID of a post then render update route.
 */
const updateMovieRoute = async (req, res) => {
  try {
    const movie = await movieService.getMovieID(req.params.id);
    const formData = formHelper.createOrEditFormData(movie);
    const head = headHelper.optimizeSEO({}, defaults.editDefault);
    res.render('edit', { formData, head });
  } catch (err) {
    console.log(`Error getting movie route: ${err.message}`);
  };
};

/**
 * Function to get the post route page.
 */
const postMovieRoute = (req, res) => {
  const formData = formHelper.createOrEditFormData();
  const head = headHelper.optimizeSEO({}, defaults.postDefault);
  res.render('post', { formData, head });
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie, updateMovieRoute, postMovieRoute, getMovie }; // Export all the functions.
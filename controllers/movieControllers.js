const movieService = require('../services/movieServices');
const formHelper = require('../utils/formHelper');
const headHelper = require('../utils/headHelper');
const defaults = require('../constant/defaultSeo');

/**
 * Creates a new movie and redirects to the home page.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request containing movie details.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the movie is created and the response is sent.
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
 * Asynchronously retrieves a list of movies and renders the home page with the movies and SEO-optimized head.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the movies are retrieved and the home page is rendered.
 * @throws {Error} - If there is an error retrieving the movies.
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
 * Updates a movie with the given ID using the provided data.
 *
 * @async
 * @function updateMovie
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the movie to update.
 * @param {Object} req.body - The data to update the movie with.
 * @param {Object} res - The response object.
 * @returns {void}
 * @throws Will log an error message if the update operation fails.
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
 * Deletes a movie by its ID and redirects to the home page.
 *
 * @async
 * @function deleteMovie
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters object.
 * @param {string} req.params.id - The ID of the movie to delete.
 * @param {Object} res - The response object.
 * @returns {void}
 * @throws Will log an error message if the movie deletion fails.
 */
const deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovie(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log(`Error deleting movie: ${err.message}`);
  };
};

/**
 * Retrieves a movie by its ID and renders the view with the movie data and optimized SEO headers.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters from the request.
 * @param {string} req.params.id - The ID of the movie to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the movie is retrieved and the view is rendered.
 * @throws {Error} - If there is an error retrieving the movie.
 */
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
 * Handles the route for updating a movie.
 * 
 * This function retrieves a movie by its ID, creates or edits the form data for the movie,
 * optimizes the SEO head, and renders the 'edit' view with the form data and head.
 * 
 * @async
 * @function updateMovieRoute
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters of the request.
 * @param {string} req.params.id - The ID of the movie to be updated.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the route handling is complete.
 * @throws {Error} - Throws an error if there is an issue retrieving the movie.
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
 * Handles the POST request for the movie route.
 *
 * This function creates or edits form data using the formHelper,
 * optimizes SEO using the headHelper, and renders the 'post' view
 * with the generated formData and head.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const postMovieRoute = (req, res) => {
  const formData = formHelper.createOrEditFormData();
  const head = headHelper.optimizeSEO({}, defaults.postDefault);
  res.render('post', { formData, head });
};

/**
 * Asynchronously retrieves a list of movies and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 * @throws {Error} - If there is an error retrieving the movies, a 500 status code and an error message are sent in the response.
 */
const getJSON = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.json(movies);
  } catch (err) {
    console.log(`Error getting movies: ${err.message}`);
    res.status(500).json({ error: 'Failed to retrieve movies' });
  };
};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie, updateMovieRoute, postMovieRoute, getMovie, getJSON }; // Export all the functions.
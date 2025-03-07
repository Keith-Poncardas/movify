const movieService = require('../services/movieServices');
const formHelper = require('../utils/formHelper');
const headHelper = require('../utils/headHelper');
const defaults = require('../constant/defaults');
const MovifyError = require('../error/errorHandler');

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
    throw new MovifyError("Error Creating Movie, Try Again Later", 400);
  };
};

/**
 * Controller function to get movies based on genre and render the home page.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} req.query - Query parameters from the request.
 * @param {string} req.query.genre - Genre to filter movies.
 * @param {Object} res - Express response object.
 * 
 * @returns {Promise<void>} - Renders the home page with movies data.
 */
const getMovies = async (req, res) => {
  const { genre, sort } = req.query;

  try {
    const moviesData = await movieService.getMovies(genre, sort);

    const getMoviesStructure = {
      headData: {
        head: headHelper.optimizeSEO({}, defaults.homeDefault)
      },
      containerHeadingData: {
        genres: defaults.genres,
        name: '',
        btnFilterTitle: 'Filter',
        btnSortTitle: 'Sort',
        sort: defaults.sortBy,
        isBtnHide: false
      },
      movies: moviesData
    };

    res.render('home', { ...getMoviesStructure });
  } catch (err) {
    console.log(`Error getting movie: ${err.message}`);
    throw new MovifyError('Error Getting Movies, Try Again Later', 500);
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
  const { id } = req.params;
  try {
    await movieService.updateMovie(id, req.body);
    res.redirect(`/movie/${id}/view`);
  } catch (err) {
    console.log(`Error updating movie: ${err.message}`);
    throw new MovifyError('Error Updating Movie, Try Again Later', 500);
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
    throw new MovifyError('Error Deleting Movie, Try Again Later', 500);
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

    const getMovieStructure = {
      headData: {
        head: headHelper.optimizeSEO(movie)
      },
      containerHeadingData: {
        genres: [],
        name: 'Listing',
        btnFilterTitle: '',
        btnSortTitle: '',
        sort: [],
        isBtnHide: true,
      },
      movieCardData: {
        movie,
        isHide: true
      }
    };

    res.render('view', { ...getMovieStructure });
  } catch (err) {
    console.log(`Error getting movie: ${err.message}`);
    throw new MovifyError('Movie Not Exist.', 404);
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

    const updateMovieStructure = {
      headData: {
        head: headHelper.optimizeSEO({}, defaults.editDefault)
      },
      data: {
        formData: formHelper.createOrEditFormData(movie),
        categories: defaults.genres
      }
    };

    res.render('edit', { ...updateMovieStructure });
  } catch (err) {
    console.log(`Error Getting Edit Route: ${err.message}`);
    throw new MovifyError('Movie Not Exist.', 500);
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

  const postMovieStructure = {
    headData: {
      head: headHelper.optimizeSEO({}, defaults.postDefault)
    },
    data: {
      formData: formHelper.createOrEditFormData(),
      categories: defaults.genres
    }
  };

  res.render('post', { ...postMovieStructure });
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

/**
 * Controller function to render the admin login page.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const adminAccess = (req, res) => {

  const { method, movieId } = req.query;

  const adminAccessStructure = {
    headData: {
      head: headHelper.optimizeSEO({}, defaults.adminLoginDefault)
    },
    formData: {
      formAction: `/movie/auth?method=${method}&movieId=${movieId}`,
    },
  };

  res.render('auth', { ...adminAccessStructure });
};


const protectRoute = (req, res) => {

  const { secretKey } = req.body;
  const { method, movieId } = req.query;

  switch (method) {
    case 'post':
      res.redirect(`/movie/post?secretKey=${secretKey}`);
      break;
    case 'edit':
      res.redirect(`/movie/${movieId}/edit?secretKey=${secretKey}`);
      break;
    default:
      break;
  };

};

module.exports = { createMovie, getMovies, updateMovie, deleteMovie, updateMovieRoute, postMovieRoute, getMovie, getJSON, adminAccess, protectRoute }; // Export all the functions.
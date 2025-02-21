/**
 * Express router for handling movie-related routes.
 * @module routes/movieRoutes
 */

const express = require('express');
const router = express.Router();
const { getMovies, protectRoute, updateMovieRoute, postMovieRoute, getMovie, getJSON, adminAccess, createMovie, updateMovie, deleteMovie } = require('../controllers/movieControllers');
const { validateSecretKey } = require('../middlewares/authentication');
const catchAsync = require('../middlewares/catchAsyncErr');

/**
 * Route to get all movies.
 * @name get/
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/', catchAsync(getMovies));

/**
 * Route to protect post route.
 * @name post/login/post
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/auth', protectRoute);

// /**
//  * Route to protect edit route.
//  * @name post/login/edit
//  * @function
//  * @memberof module:routes/movieRoutes
//  * @inner
//  * @param {string} path - Express path
//  * @param {callback} middleware - Express middleware
//  */
// router.post('/login/edit', controller.protectRoute);

/**
 * Route to get the edit page for a specific movie.
 * @name get/:id/edit
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/edit', validateSecretKey, catchAsync(updateMovieRoute));

/**
 * Route to get the page for posting a new movie.
 * @name get/post
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/post', validateSecretKey, postMovieRoute);

/**
 * Route to view a specific movie.
 * @name get/:id/view
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/view', getMovie);

/**
 * Route to get all movies in JSON format.
 * @name get/api/all
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/api/all', getJSON);

/**
 * Route to get the login page for admin.
 * @name get/post/auth
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/auth', adminAccess);

/**
 * Route to create a new movie.
 * @name post/
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/', catchAsync(createMovie));

/**
 * Route to update a specific movie.
 * @name put/:id
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/:id', catchAsync(updateMovie));

/**
 * Route to delete a specific movie.
 * @name delete/:id
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/:id', catchAsync(deleteMovie));

module.exports = router;
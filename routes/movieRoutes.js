/**
 * Express router for handling movie-related routes.
 * @module routes/movieRoutes
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieControllers');
const { validateSecretKey } = require('../middlewares/authentication');

/**
 * Route to get all movies.
 * @name get/
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/', controller.getMovies);

/**
 * Route to protect post route.
 * @name post/login/post
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/login/post', controller.protectPostRoute);

/**
 * Route to protect edit route.
 * @name post/login/edit
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/login/edit', controller.protectEditRoute);

/**
 * Route to get the edit page for a specific movie.
 * @name get/:id/edit
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/edit', validateSecretKey, controller.updateMovieRoute);

/**
 * Route to get the page for posting a new movie.
 * @name get/post
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/post', validateSecretKey, controller.postMovieRoute);

/**
 * Route to view a specific movie.
 * @name get/:id/view
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/view', controller.getMovie);

/**
 * Route to get all movies in JSON format.
 * @name get/api/all
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/api/all', controller.getJSON);

/**
 * Route to get the login page for admin.
 * @name get/post/auth
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/post/auth', controller.adminLoginPost);

/**
 * Route to get the login page for editing a specific movie.
 * @name get/:id/edit/auth
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/edit/auth', controller.adminLoginEdit);

/**
 * Route to create a new movie.
 * @name post/
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/', controller.createMovie);

/**
 * Route to update a specific movie.
 * @name put/:id
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/:id', controller.updateMovie);

/**
 * Route to delete a specific movie.
 * @name delete/:id
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/:id', controller.deleteMovie);

module.exports = router;
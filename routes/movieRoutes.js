/**
 * Express router for handling movie-related routes.
 * @module routes/movieRoutes
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieControllers');

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
 * Route to get the edit page for a specific movie.
 * @name get/:id/edit
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id/edit', controller.updateMovieRoute);

/**
 * Route to get the page for posting a new movie.
 * @name get/post
 * @function
 * @memberof module:routes/movieRoutes
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/post', controller.postMovieRoute);

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
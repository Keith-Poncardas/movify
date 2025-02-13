const express = require('express');
const router = express.Router();
const controller = require('../controllers/movieControllers');

router.get('/', controller.getMovies);
router.get('/:id/edit', controller.updateMovieRoute);
router.get('/post', controller.postMovieRoute);
router.get('/:id/view', controller.getMovie);
router.get('/api/all', controller.getJSON);

router.post('/', controller.createMovie);
router.put('/:id', controller.updateMovie);
router.delete('/:id', controller.deleteMovie);

module.exports = router;
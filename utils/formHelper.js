/**
 * Creates or edits form data for a movie.
 *
 * @param {Object} [movie={}] - The movie object containing details to populate the form.
 * @param {string} [movie._id] - The unique identifier of the movie.
 * @param {string} [movie.title] - The title of the movie.
 * @param {string} [movie.genre] - The genre of the movie.
 * @param {string} [movie.director] - The director of the movie.
 * @param {string} [movie.releaseYear] - The release year of the movie.
 * @param {string} [movie.duration] - The duration of the movie.
 * @param {string} [movie.rating] - The rating of the movie.
 * @param {string} [movie.cast] - The cast of the movie.
 * @param {string} [movie.language] - The language of the movie.
 * @param {string} [movie.country] - The country of the movie.
 * @param {string} [movie.imageUrl] - The image URL of the movie.
 * @param {string} [movie.description] - The description of the movie.
 * @returns {Object} The form data object containing the movie details and form metadata.
 */
const createOrEditFormData = (movie = {}) => ({
  _id: movie._id,
  formAction: movie._id ? `/movie/${movie._id}?_method=PUT` : '/movie',
  formTitle: movie._id ? 'Edit Movie' : 'Post Movie',
  title: movie.title || '',
  genre: movie.genre || '',
  director: movie.director || '',
  releaseYear: movie.releaseYear || '',
  duration: movie.duration || '',
  rating: movie.rating || '',
  cast: movie.cast || '',
  language: movie.language || '',
  country: movie.country || '',
  imageUrl: movie.imageUrl || '',
  description: movie.description || '',
  buttonText: movie._id ? 'Update' : 'Post',
});

module.exports = { createOrEditFormData };
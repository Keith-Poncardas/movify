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
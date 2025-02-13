// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import required modules
const express = require('express'); // Express framework for handling HTTP requests
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const methodOverride = require('method-override'); // Middleware to support PUT & DELETE via forms
const path = require('path'); // Module for handling file paths
const connectDB = require('./config/db'); // Database connection function
const controller = require('./controllers/movieControllers'); // Import movie controller
const headHelper = require('./utils/headHelper'); // Helper for SEO optimization
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing

// Initialize Express app
const app = express();

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Set views directory for template rendering
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Parse incoming request bodies (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Enable HTTP method overrides (e.g., PUT, DELETE in forms)
app.use(methodOverride('_method'));

// Set EJS as the template/view engine
app.set('view engine', 'ejs');

// Define route handlers
app.get('/', controller.getMovies); // Route for homepage displaying movies
app.use('/movie', require('./routes/movieRoutes')); // Movie-related routes

// 404 Error Handling Middleware
app.use((req, res) => {
  // Generate SEO metadata for the error page
  const head = headHelper.optimizeSEO({}, require('./constant/defaultSeo').errorDefault);
  res.render('404', { head }); // Render the "404.ejs" view with SEO metadata
});

// Connect to the database
connectDB();

// Start the Express server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
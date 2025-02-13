require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const connectDB = require('./config/db');
const controller = require('./controllers/movieControllers');
const headHelper = require('./utils/headHelper');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.get('/', controller.getMovies);
app.use('/movie', require('./routes/movieRoutes'));

// 404 Middleware.
app.use((req, res) => {
  const head = headHelper.optimizeSEO({}, require('./constant/defaultSeo').errorDefault);
  res.render('404', { head });
});

connectDB();
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
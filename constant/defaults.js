/**
 * Default SEO configuration for the home page.
 * @constant {Object} homeDefault
 * @property {string} title - The title of the website.
 * @property {string} description - A brief description of the website.
 * @property {string} keywords - Keywords related to the website content.
 * @property {string} author - The author of the website.
 * @property {string} canUrl - The canonical URL of the website.
 * @property {string} ogTitle - The Open Graph title for social media sharing.
 * @property {string} ogDescription - The Open Graph description for social media sharing.
 */
const homeDefault = {
  title: 'Movify',
  description: 'Welcome to my website!',
  keywords: 'web development, programming, JavaScript',
  author: 'Keith Poncardas',
  canUrl: 'https://mywebsite.com',
  ogTitle: 'My Awesome Website',
  ogDescription: 'Discover amazing content on my site!',
};

/**
 * Default SEO configuration for a post.
 * 
 * @constant {Object} postDefault
 * @property {string} title - The title of the post.
 * @property {string} description - The description of the post.
 * @property {string} keywords - The keywords associated with the post.
 * @property {string} author - The author of the post.
 * @property {string} canUrl - The canonical URL of the post.
 * @property {string} ogTitle - The Open Graph title for the post.
 * @property {string} ogDescription - The Open Graph description for the post.
 */
const postDefault = {
  title: 'Post Movie',
  description: 'Welcome to my website!',
  keywords: 'web development, programming, JavaScript',
  author: 'Keith Poncardas',
  canUrl: 'https://mywebsite.com',
  ogTitle: 'My Awesome Website',
  ogDescription: 'Discover amazing content on my site!',
};

/**
 * Default SEO configuration for the edit page.
 * 
 * @constant {Object} editDefault
 * @property {string} title - The title of the edit page.
 * @property {string} description - The description of the edit page.
 * @property {string} keywords - The keywords associated with the edit page.
 * @property {string} author - The author of the content.
 * @property {string} canUrl - The canonical URL of the edit page.
 * @property {string} ogTitle - The Open Graph title for the edit page.
 * @property {string} ogDescription - The Open Graph description for the edit page.
 */
const editDefault = {
  title: 'Edit Movie',
  description: 'Welcome to my website!',
  keywords: 'web development, programming, JavaScript',
  author: 'Keith Poncardas',
  canUrl: 'https://mywebsite.com',
  ogTitle: 'My Awesome Website',
  ogDescription: 'Discover amazing content on my site!',
};

/**
 * Default SEO configuration for error pages.
 * 
 * @constant {Object} errorDefault
 * @property {string} title - The title of the error page.
 * @property {string} description - The description of the error page.
 * @property {string} keywords - The keywords associated with the error page.
 * @property {string} author - The author of the content.
 * @property {string} canUrl - The canonical URL of the website.
 * @property {string} ogTitle - The Open Graph title for social media sharing.
 * @property {string} ogDescription - The Open Graph description for social media sharing.
 */
const errorDefault = {
  title: '404 Not found',
  description: 'Welcome to my website!',
  keywords: 'web development, programming, JavaScript',
  author: 'Keith Poncardas',
  canUrl: 'https://mywebsite.com',
  ogTitle: 'My Awesome Website',
  ogDescription: 'Discover amazing content on my site!',
};

/**
 * Default settings for the login page.
 * @constant {Object} loginDefault
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 * @property {string} keywords - The meta keywords for the page.
 * @property {string} author - The author of the page content.
 * @property {string} canUrl - The canonical URL of the page.
 * @property {string} ogTitle - The Open Graph title for social media sharing.
 * @property {string} ogDescription - The Open Graph description for social media sharing.
 */
const adminLoginDefault = {
  title: 'Admin Login',
  description: 'Welcome to my website!',
  keywords: 'web development, programming, JavaScript',
  author: 'Keith Poncardas',
  canUrl: 'https://mywebsite.com',
  ogTitle: 'My Awesome Website',
  ogDescription: 'Discover amazing content on my site!',
};

/**
 * An array of movie genres.
 * @constant {string[]}
 * @default
 * @example
 */
const genres = [
  'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
  'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror',
  'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'
];

const sortBy = [
  'Most Popular',
  'Latest'
];

module.exports = { homeDefault, postDefault, editDefault, errorDefault, genres, sortBy, adminLoginDefault };
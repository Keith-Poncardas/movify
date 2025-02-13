/**
 * Optimizes SEO data by merging provided data with default values.
 *
 * @param {Object} [data={}] - The data object containing SEO information.
 * @param {string} [data.title] - The title for SEO.
 * @param {string} [data.description] - The description for SEO.
 * @param {string} [data.genre] - The genre or keywords for SEO.
 * @param {string} [data.author] - The author for SEO.
 * @param {string} [data.canUrl] - The canonical URL for SEO.
 * @param {string} [data.imageUrl] - The image URL for Open Graph.
 * @param {string} [data.url] - The URL for Open Graph.
 * @param {Object} [defaults={}] - The default values for SEO information.
 * @param {string} [defaults.title] - The default title for SEO.
 * @param {string} [defaults.description] - The default description for SEO.
 * @param {string} [defaults.keywords] - The default keywords for SEO.
 * @param {string} [defaults.author] - The default author for SEO.
 * @param {string} [defaults.canUrl] - The default canonical URL for SEO.
 * @param {string} [defaults.ogTitle] - The default title for Open Graph.
 * @param {string} [defaults.ogDescription] - The default description for Open Graph.
 * @param {string} [defaults.ogImage] - The default image URL for Open Graph.
 * @param {string} [defaults.ogUrl] - The default URL for Open Graph.
 * @param {string} [defaults.twitterTitle] - The default title for Twitter.
 * @param {string} [defaults.twitterDescription] - The default description for Twitter.
 * @param {string} [defaults.twitterImage] - The default image URL for Twitter.
 * @param {Object} [defaults.extra] - Additional extra properties to be merged.
 * @returns {Object} The optimized SEO data object.
 */
const optimizeSEO = (data = {}, defaults = {}) => ({
  seo: {
    title: data.title || defaults.title || '',
    description: data.description || defaults.description || '',
    keywords: data.genre || defaults.keywords || '',
    author: data.author || defaults.author || '',
    canUrl: data.canUrl || defaults.canUrl || '',
  },
  og: {
    title: data.title || defaults.ogTitle || '',
    description: data.description || defaults.ogDescription || '',
    image: data.imageUrl || defaults.ogImage || '',
    url: data.url || defaults.ogUrl || '',
  },
  twitter: {
    title: data.title || defaults.twitterTitle || '',
    description: data.description || defaults.twitterDescription || '',
    image: data.image || defaults.twitterImage || '',
  },
  ...defaults.extra || {},
});

module.exports = { optimizeSEO };

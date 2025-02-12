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

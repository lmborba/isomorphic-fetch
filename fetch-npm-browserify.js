// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
if (process.env.IS_BROWSER) {
  require('whatwg-fetch');
}
module.exports = fetch;

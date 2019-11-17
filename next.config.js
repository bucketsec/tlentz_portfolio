const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins([
  [withSass],
  [optimizedImages, {
    optimizeImagesInDev: true
  }],
]);

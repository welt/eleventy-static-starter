/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

module.exports = function () {
  return {
    ogDescription: 'Lorem ipsum dolor sit amet',
    ogTitle: 'Duis eu massa vitae nisi efficitur ornare',
    canonical: process.env.CANONICAL,
    env: process.env.ELEVENTY_ENV,
  };
};

'use strict';

let fs = require('fs'),
  Promise = require('bluebird'),
  path = require('path'),
  api = require('../../lib/');

Promise.promisifyAll(fs);

module.exports = {
  getHARresult: function(harFile, domAdvice, options) {
    return fs.readFileAsync(path.resolve(harFile))
      .then(JSON.parse)
      .then((har) => api.runHarAdvice(har, api.getHarAdvice(), domAdvice, options));
  },
  getHAR: function(harFile) {
    return fs.readFileAsync(path.resolve(harFile))
      .then(JSON.parse)}
};

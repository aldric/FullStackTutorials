'use strict';

var api = require('./controllers/api'),
  index = require('./controllers');


var OutputCache = require('output-cache'),
  outputCache = new OutputCache({ maxCacheSizePerRoute: 10, removeOldEntriesWhenFull: true}),
  cacheOptions = {
    location: outputCache.cacheLocation.SERVER,
    durationSeconds: 600,
    headersToCache: ['Content-Type', 'content-length']
  };

/**
 * Application routes
 */
module.exports = function (app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  app.get('/api/casinoGames', api.casinoGames);
  app.get('/api/casinoGamesByCategories', api.casinoGamesByCategories);
  app.get('/api/launchGame/:gameId', api.launchCasinoGame);

  app.post('/casino', api.goHome);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);

  outputCache.get(app, '/api/casinoGamesByCategories', cacheOptions, function (req, res, next) {
    console.log('get cache');
    if (req.cachedResponse) {
      console.log('cachedResponse !! ');
      // iterate through all the cached response headers, and set them
      for (var prop in req.cachedResponse.headers) {
        if (req.cachedResponse.headers.hasOwnProperty(prop)) {
          res.setHeader(prop, req.cachedResponse.headers[prop]);
        }
      }
      res.send(req.cachedResponse.status, req.cachedResponse.responseBody);
    }
    else {
      console.log('NOT cachedResponse !! ');
      res.send(200, api.casinoGamesByCategories);
    }
  });


};
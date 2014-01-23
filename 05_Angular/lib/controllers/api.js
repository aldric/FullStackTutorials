'use strict';
var util = require('util');
var https = require('https');
var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  CasinoGame = mongoose.model('CasinoGame');

/**
 * Get awesome things
 */
exports.awesomeThings = function (req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};


exports.casinoGames = function (req, res) {
  return CasinoGame.find(function (err, games) {
    if (!err) {
      return res.json(games);
    } else {
      return res.send(err);
    }
  });
};

var getOptions = function (gameId) {
  return {
    hostname: 'betclicstage.net',
    path: util.format('/st2/svcmobile/api/casino/launchgame/%s/0', gameId),
    headers: {
      'X-Client': '{"userId":-1,"ip":"10.56.45.28","oddsFormat":"Uk","site":"GbEn","channelId":"BetclicMobile","universe":"Casino","session":null}',
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,sd',
      'Cache-Control': 'no-cache'

    },
    agent: false};

};

exports.casinoGamesByCategories = function (req, res) {
  var opt = {
    hostname: 'betclicstage.net',
    path: '/st2/svcmobile/api/casino/gamesbycategory',
    headers: {
      'X-Client': '{"userId":-1,"ip":"10.56.45.28","oddsFormat":"Uk","site":"GbEn","channelId":"BetclicMobile","universe":"Casino","session":null}',
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,sd',
      'Cache-Control': 'no-cache'
    },
    agent: false};
  https.get(opt, function (request) {
    console.log("statusCode: ", request.statusCode);
    console.log("headers: ", request.headers);
    var data = '';
    request.on('data', function (chunk) {
      data += chunk;
      console.log('ondata');
    });

    request.on('error', function (e) {
      console.error(e);
    });

    request.on('end', function(){
      console.log('onend');
      res.json(JSON.parse(data));
    });
  });
};

exports.launchCasinoGame = function (req, res) {
  var options = getOptions(req.params.gameId);
  https.get(options,function (getRes) {
    console.log("statusCode: ", getRes.statusCode);
    console.log("headers: ", getRes.headers);
    getRes.on('data', function (data) {
      res.setHeader('Content-Type', 'application/json');
      res.send({ url: JSON.parse(data) });
    });
  }).on('error', function (e) {
      console.error(e);
    });
};

exports.goHome = function (req, res) {
  console.log('lalalala');
  res.redirect('/casino');
};

var express = require('express');
var util = require('util');
var mongoose = require('mongoose');
var casino = require('./casinoModel.js');
var CasinoGameModel = casino.CasisoGameModel;

var https = require('https');

//http://expressjs.com/

var app = express();

app.get('/hello', function(req, res){
  res.send(req.query.name === undefined ? 'Hello world ' : util.format('Hello %s', req.query.name));
});

app.get('/bye/:name?', function(req, res){
  res.send(req.params.name === undefined ? 'Bye world ' : util.format('Hello %s', req.params.name));
});

app.get('/casinoGames/:gameId?', function(req, res){

	var gameId = req.params.gameId;
	
	if(gameId === undefined) {
		CasinoGameModel.find({}, function(err, result){
		   if(!err) 
	           res.send(result);		   
		});
	} else {
		CasinoGameModel.findOne({ id : gameId}, function(err, result){
		   if(!err) 
	           res.send(result);		   
		});
	}
 
});


var getOptions = function(gameId) {
	return {
			hostname: 'betclicstage.net',
			path: util.format('/st2/svcmobile/api/casino/launchgame/%s/0', gameId),
			headers: {
				'X-Client' : '{"userId":-1,"ip":"10.56.45.28","oddsFormat":"Uk","site":"GbEn","channelId":"BetclicMobile","universe":"Casino","session":null}',
				'Content-Type' : 'application/json',
				'accept': '*/*',
				'Accept-Encoding': 'gzip,deflate,sd',
				'Cache-Control': 'no-cache'
				
			},
			agent: false};
			
};

app.get('/launchGame/:gameId', function(req, res){
	var options = getOptions(req.params.gameId);
	
	https.get(options, function(getRes) {
	  console.log("statusCode: ", getRes.statusCode);
	  console.log("headers: ", getRes.headers);
	  getRes.on('data', function(data) {
		res.setHeader('Content-Type', 'application/json');
		res.send({ url : JSON.parse(data) });		   
		process.stdout.write(data);
	  });

	}).on('error', function(e) {
	  console.error(e);
	});
			
	
});


app.listen(3000);


mongoose.connect('mongodb://localhost/mongo-tutos');
/*** Adding games from json file in case nothing is in the database ***/
var db = mongoose.connection;







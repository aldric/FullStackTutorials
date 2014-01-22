var mongoose = require('mongoose');

var casino = require('./casinoModel.js');
var CasinoGameModel = casino.CasisoGameModel;

mongoose.connect('mongodb://localhost/mongo-tutos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log('logged in');

  CasinoGameModel.find({}, function(err, games){
	console.log("Games in database : %s", games.length);
	for(var i = 0; i < games.length; i++) {
		console.log('Game : %s found', games[i].name);
	}
  });
  
});

/*
Sample  
var game = new CasinoGameModel({
  id: 364,
  name: 'Deuces Wild',
  supplier: 'QuickFire',
  categoryId: 637,
  categoryName: 'All',
  linkImage: 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/160x120_DeucesWild.jpg',
  launcherImage: 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/616x320_Deuces_Wild.jpg',
  carouselImage: 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/308x160_Deuces_Wild.jpg'
});
//game.save();
console.log(game);
*/
//Load data from file
var casinoGames = require('./casinoGames.json');

casinoGames.forEach(function(game) {
	console.log('JSON data : %s found', game.name);
	var game = new CasinoGameModel(game);
	
	CasinoGameModel.findOne({ 'id' : game.id}, function(err, result){
		if(err)
			console.log('Error %s', err)
		else if(result === null){ //game with id is not in the DB so we can add it.
			console.log('Adding ? %s to games collection', game.name);
			game.save();
		}  else if(result !== null){
			console.log('%s is already in collections', game.name);
		}
	});
});






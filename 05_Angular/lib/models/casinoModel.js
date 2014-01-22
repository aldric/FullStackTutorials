var mongoose = require('mongoose');

//Schema creation
var casinoGameSchema = mongoose.Schema({
    id:  Number,
	name: String,
	supplier: String,
	categoryId: Number,
	categoryName: String,
	linkImage: String,
	launcherImage: String,
	carouselImage: String
});


exports.CasisoGameModel = mongoose.model('CasinoGame', casinoGameSchema);

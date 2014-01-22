var mongoose = require('mongoose');

/*
      Casino Game model
	  
	   {
            "id": 364,
            "name": "Deuces Wild",
            "supplier": "QuickFire",
            "categoryId": 637,
            "categoryName": "All",
            "linkImage": "https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/160x120_DeucesWild.jpg",
            "launcherImage": "https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/616x320_Deuces_Wild.jpg",
            "carouselImage": "https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/308x160_Deuces_Wild.jpg"
        }

*/

//Schema creation
var casinoGameSchema = mongoose.Schema({
    id:  Number,
	name: String,
	supplier: String,
	categoryId: Number,
	categoryName: String,
	linkImage: String,
	LauncherImage: String,
	carouselImage: String
});


exports.CasisoGameModel = mongoose.model('CasinoGame', casinoGameSchema);

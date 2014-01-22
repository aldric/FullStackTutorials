/**
 * Created by a.gaudinot on 22/01/14.
 */
'use strict';

var casino = require('../models/casinoModel.js');
var CasinoGameModel = casino.CasisoGameModel;
var mongoose = require('mongoose');
var casinoGames = require('./casinoGames.json');

CasinoGameModel.find({}).remove(function() {
    CasinoGameModel.create(casinoGames, function(){
      console.log('finished populating casino games');
    });
});

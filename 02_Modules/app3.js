
var square = require('./squareModule.js');

square.square(4, function(err, result){
	console.log('4x4 = %s', result);
});

var powerModule = require('./powerModule.js');
var p = new powerModule.lib(3);

p.power(4, function(err, result){
	console.log('4x4x4 = %s', result);
});

var pp = new powerModule.proto(4);
pp.power(4, function(err, result){
	console.log('4x4x4x4 = %s', result);
});

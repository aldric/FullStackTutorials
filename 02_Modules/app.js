//Open the async module
var async = require('async');

console.log('module usage + async behavior in nodeJS ');
console.log('Async >> async.each(array, iterator, callback);');
console.log('Sync  >> async.eachSeries(array, iterator, callback);');
console.log('--------------------------------------------------------');
console.log('--------------------------------------------------------');
console.log('--------------------------------------------------------');

//filling array with dummy data
var array = [];
for(var i = 0; i < 10; i++) {
	array.push(i);
}

//error or end iteration callback 
var callback = function(err) {
  console.log('Iterations finished occured : %s', err);
};

//iterator callbacks
var iterator = function(element, callback) {
 setTimeout(function(){ 
	  console.log('<<%s>>', element);
	  callback();
	}, Math.random() * 100);
};

var iterator2 = function(element, callback) {
 setTimeout(function(){ 
	  console.log('??%s??', element);
	  callback();
	}, Math.random() * 100);
};

console.log('async iteration');
async.each(array, iterator, callback);
console.log('after each call');


console.log('sync iteration');
async.eachSeries(array, iterator2, callback);
console.log('after each series call : eachseries call itself is async but the iteration is sync');

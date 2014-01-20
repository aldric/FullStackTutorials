//Open the async module
var async = require('async');

console.log('general javascript >> Binding contexts >> ');

// Here is a simple object with an (unnecessarily roundabout) squaring method
var AsyncSquaringLibrary = {
  squareExponent: 2,
  square: function(number, callback){ 
    var result = Math.pow(number, this.squareExponent);
    setTimeout(function(){ //--> trick do be async
      callback(null, result);
    }, 200);
  }
};

//map => returns new array by apply transformation on each element of the input array
// ~ like select in Linq
async.map([1, 2, 3], AsyncSquaringLibrary.square, function(err, result){
	console.log(this.exports);
  console.log('result >> %s', result);
});
//why NaN ?? because in AsyncSquaringLibrary.square we have >> this.squareExponent and in the context of the call 'this' is nodejs itself so squareExponent becomes undefined 


//we bind the appropriate context (scope) to the our function
async.map([1, 2, 3], AsyncSquaringLibrary.square.bind(AsyncSquaringLibrary), function(err, result){
    console.log('result >> %s', result);
});
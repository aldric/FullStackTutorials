//

// Here is a simple object with an (unnecessarily roundabout) squaring method
// Here is a simple object with an (unnecessarily roundabout) squaring method
var SquaringLibrary = function() {
  var self = this;
  var squareExponent = 2;
  self.square = function(number, callback){ 
    var result = Math.pow(number, squareExponent);
    setTimeout(function(){ //--> trick do be async
      callback(null, result);
    }, 200);
  }
};

module.exports = new SquaringLibrary();


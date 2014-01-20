var PowerLibrary = function(exp) {
  var self = this;
  var exponent = exp;
  self.power = function(number, callback){ 
    var result = Math.pow(number, exponent);
    setTimeout(function(){ //--> trick do be async
      callback(null, result);
    }, 200);
  }
};

module.exports.lib = PowerLibrary;

module.exports.proto = function(exp) {
  var self = this;
  var exponent = exp;
  self.power = function(number, callback){ 
    var result = Math.pow(number, exponent);
    setTimeout(function(){ //--> trick do be async
      callback(null, result);
    }, 200);
  }
};
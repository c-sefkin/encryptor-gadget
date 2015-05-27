var cryptoSquare = function(uncoded) {
   return uncoded.toLowerCase().replace(/[^a-z0-9]/g, "");
};

var columns = function(string) {
  var stringLength = cryptoSquare(string).length;
  return Math.ceil(Math.sqrt(stringLength));

};

var rows = function(string) {
  var stringLength = cryptoSquare(string).length;
  return Math.floor(Math.sqrt(stringLength));

};

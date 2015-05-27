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

var splitty = function(string) {
  var num = columns(string);
  var regex = new RegExp(".{1," + num + "}", "g");
  var splitString = string.match(regex);
  console.log(splitString);
  return splitString;

};

var encrypt = function(string) {
  var text = cryptoSquare(string);
  var arr1 = splitty(string);
  var new_string = "";
  for (var col = 0; col<columns(string); col++) {
    for (var row = 0; row < arr1.length; row++) {
      new_string += arr1[row].substring(col, col + 1);
  };
};

var regex = new RegExp(".{1,5}", "g");
console.log(new_string.match(regex));
return new_string.match(regex).join(" ");

};

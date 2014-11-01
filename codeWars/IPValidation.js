/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal 
format. Input to the isValidIP function is guaranteed to be a single string.

Examples of valid inputs: 1.2.3.4 123.45.67.89

Examples of invalid inputs: 1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089
*/

function isValidIP(str) {
  var strArr = str.split('.').filter(function(item){
    var num = parseInt(item);
    return typeof num === 'number' && num >= 0 && num < 256;
  });

  return !!str.match(/^\d+\.\d+\.\d+\.\d+$/) && strArr.length === 4;
}

console.log(isValidIP('1.2.3.4'));//true
console.log(isValidIP('123.45.67.89'));//true
console.log(isValidIP('1.2.3'));//false
console.log(isValidIP('123.456.78.90'));//false
console.log(isValidIP('123.045.067.089'));//false

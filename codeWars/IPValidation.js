/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal 
format. Input to the isValidIP function is guaranteed to be a single string.

Examples of valid inputs: 1.2.3.4 123.45.67.89

Examples of invalid inputs: 1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089
*/

function isValidIP(str) {
  var arr = str.split('.');
  var flag = true;
  arr.forEach(function(item){
    var integer = parseInt(item);
    if(integer < 0 || integer > 255 || isNaN(integer)){
      flag = false;
    }
  });
  if(arr.length !== 4 || !flag){
    return false;
  }
  return true;
}

console.log(isValidIP('a.2.3.4'));
console.log(parseInt('a'));
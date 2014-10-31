/*
Write an efficient function that checks whether any permutation ↴ of an input 
string is a palindrome ↴ .
Examples:
"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false

*/

function permuPalindrome(string){
  //hash of string characters
  //iterate through hash, if occurence of all chars = even, then true
  var hash = {};
  var oddCount = 0;
  for(var i = 0; i < string.length; i++){
    var cur = string[i];
    hash[cur] = hash[cur] + 1 || 1;
  }
  for(var key in hash){
    var val = hash[key];
    (val & 1) && oddCount++;
  }
  return oddCount < 2;
}


console.log(permuPalindrome('civic')); //true
console.log(permuPalindrome('anina')); //true
console.log(permuPalindrome('iivbcc')); //true
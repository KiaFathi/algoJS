/*
In this kata you have to create all permutations of an input string 
and remove duplicates, if present. This means, you have to shuffle all letters 
from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

*/


function permutations(string){
  var hash = {};
  var resArr = [];
  var subroutine = function(testStr, newString){
    newString = newString || '';
    if(newString.length === string.length){
      hash[newString] = true;
      return;
    }
    for(var i = 0; i < testStr.length; i++){
      var cur = testStr[i];
      var str = newString + cur;
      var excision = testStr.substring(0, i) + testStr.substring(i+1);
      subroutine(excision, str);
    }
  }; 
  subroutine(string);
  for(var key in hash){
    resArr.push(key);
  }
  return resArr;
}

console.log(permutations('aba'));

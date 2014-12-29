/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use any additional data structures?
*/


//Time Complexity: O(n), Space Complexity: O(n)
var uniqueCharacters = function(string){
  var hash = {};
  for(var i = 0; i < string.length; i++){
    var cur = string[i];
    if(hash[cur]){
      return false;
    } else {
      hash[cur] = true;
    }
  }
  return true;
};

console.log(uniqueCharacters('abcdefg'));
console.log(uniqueCharacters('aba'));

/*
Without Additional Data Structures
Time Complexity: O(n^2), Space Complexity: O(1)
*/

var uniqueCharacters2 = function(string){
  for(var i = 0; i < string.length - 1; i++){
    var cur = string[i];
    for(var j = i + 1; j < string.length; j++){
      var nex = string[j];
      if(cur === nex){
        return false;
      }
    }
  }
  return true;
};

console.log(uniqueCharacters2('abcdefg'));
console.log(uniqueCharacters2('aba'));

/*
Things to improve:
1. Explore bit vectors and their use case here
2. Could be done with sorting algorithm as well.
*/
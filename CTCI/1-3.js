/*
Given two strings, write a method to decide if one is a permutation of the other.
*/

/*
Time Complexity: O(n), Space Complexity: O(n)
*/
function isPerm(str, testStr){
  if(str.length !== testStr.length){
    return false;
  }
  var hash = {};
  for(var i = 0; i < testStr.length; i++){
    var cur = testStr[i];
    hash[cur] = hash[cur] || 0;
    hash[cur]++;
  }
  for(var i = 0; i < testStr.length; i++){
    var item = str[i];
    if(!hash[item]){
      return false;
    } else {
      hash[item]--;
    }
  }
  for(var key in hash){
    if(hash[key]){
      return false;
    }
  }
  return true;
}

console.log(isPerm('abc', 'bac'));
console.log(isPerm('dog', 'mog'));
console.log(isPerm('aaaabc', 'baaaac'));
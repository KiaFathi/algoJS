/*
Implement a reverse function that reverses a string.
*/

/* Solution 1
Time Complexity: O(n/2), Space Complexity: O(n)
*/
var reverse1 = function(string){
  var strArr = string.split('');
  var temp;
  var i = 0;
  var j = strArr.length - 1;
  while(i < j){
    temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join('');
};

console.log(reverse1('abcdefg'));

/* Solution 2
Time Complexity: O(whatever native reserve is)
Space Complexity: O(n)
*/

var reverse2 = function(string){
  return string.split('').reverse().join('');
};

console.log(reverse2('abcdefg'));



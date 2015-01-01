/*
Write a method to replace all spaces in a string with '%20'. Youmay assume that
the string has sufficient space at the end of the string to hold the additional
characters, and that you are given the "true" length of the string.
*/


/* RegExp Solution
  Time Complexity: O(n), Space Complexity: O(n)
*/

function spaceReplace(string){
  return string.replace(/\s/gi, '&20');
}

console.log(spaceReplace('a b c d e f g'));

/* Not pure RegExp
  Time Complexity: O(n), Space Complexity: O(n)
*/

function spaceReplace2(string){
  var strArr = string.split('');
  for(var i = 0; i < strArr.length; i++){
    if(strArr[i].match(/\s/)){
      strArr[i] = '%20';
    }
  }
  return strArr.join('');
}
console.log(spaceReplace2('a b c d e f g'));

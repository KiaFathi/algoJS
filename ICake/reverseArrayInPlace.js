/*
Write a function to reverse a string in place.
"In place" means "without creating a new string in memory."
Use a language where strings are mutable, like Ruby. In some languages, like 
Python, strings are immutable, meaning they cannot be changed after they're 
created.
If you're not comfortable coding in a language with mutable strings, reverse an 
array of characters instead.

*/

function rIP(string){
  var strArr = string.split('');
  var i = 0;
  var j = strArr.length - 1;
  while(i <= j){
    var temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join('');
}

console.log(rIP('KIAaik'));
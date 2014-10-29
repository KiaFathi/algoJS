/*
Write a function to reverse an array of characters in place.
"In place" means "without creating a new string in memory."
*/


function rIP(string){
  var i = 0;
  var j = string.length - 1;
  var strArr = string.split('');
  while(i < j){
    var temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join('');
}

console.log(rIP('abc'));
console.log(rIP('racecars'));
console.log(rIP('hi mom!'));
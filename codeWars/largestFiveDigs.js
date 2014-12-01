/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found 
within within the number given.. The number will be passed in as a string of 
only digits. It should return a five digit integer. The number passed may be as 
large as 1000 digits.

*/

function solution(digits){
  var max = -Infinity;
  var digitStr = digits.toString();
  for(var i = 0; i < digitStr.length; i++){
    var cur = digitStr.substring(i, i+2);
    max = Math.max(parseInt(cur), max);
  } 
  return max;
}


console.log(solution(283910));
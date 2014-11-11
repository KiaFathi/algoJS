/*
A palindromic number reads the same both ways. The largest palindrome made from 
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

var palindromicNumber = function(n){
  var upperBound = Math.pow(10, n) - 1;
  var maxPal = 0;
  for(var i = upperBound; i >= upperBound - Math.pow(10, n-1); i--){
    for(var j = upperBound; j >= upperBound - Math.pow(10, n-1); j--){
      var num = j*i;
      if(numIsPal(num) && num > maxPal){
        maxPal = num;
      }
    }
  }
  return maxPal;
};

console.log(palindromicNumber(3));

function numIsPal(number){
  var numStr = number.toString();
  var i = 0;
  var j = numStr.length - 1;
  var flag = true;
  while(i <= j && flag){
    if(numStr[i] !== numStr[j]){
      flag = false;
    }
    i++;
    j--;
  }
  return flag;
}

console.log(palindromicNumber(3));
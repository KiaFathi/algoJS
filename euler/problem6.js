/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural 
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred 
natural numbers and the square of the sum.
*/

function diffSquares(upperBound){
  var sumOfSquares = 0;
  var squareOfSum = 0;
  for(var i = 0; i <=upperBound; i++){
    sumOfSquares += (i * i);
    squareOfSum += i;
  }
  squareOfSum = Math.pow(squareOfSum, 2);
  return squareOfSum - sumOfSquares;
}

console.log(diffSquares(100));
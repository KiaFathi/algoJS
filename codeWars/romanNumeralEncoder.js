/*
Create a function taking a positive integer as its parameter and returning a 
string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting 
with the left most digit and skipping any digit with a value of zero. In Roman 
numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is 
written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending 
order: MDCLXVI.

*/

var symbolArray = [
  [1000, 'M'], 
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5, 'V'],
  [1, 'I']
];

var symbolHash = {
  I: 'V',
  V: 'X',
  X: 'L',
  L: 'C',
  C: 'D',
  D: 'M'
};



var solution = function(n){
  var res = '';
  var subroutine = function(num, currentDenom){
    var numeral = symbolArray[currentDenom];
    if(num === 0 || !numeral){
      return;
    }
    if(num >= numeral[0]){
      num -= numeral[0];
      res = res + numeral[1];
    }
    if(num >= numeral[0]){
      subroutine(num, currentDenom);
    } else {
      subroutine(num, currentDenom + 1);
    }
  };
  subroutine(n, 0);
  var fours = res.match(/(.)\1{3,}/g);
  if(fours){
    for(var i = 0; i < fours.length; i++){
      var cur = fours[i];
      var replace = cur[0] + symbolHash[cur[0]];
      res = res.replace(cur, replace);
    }    
  }
  return res;
};

console.log(solution(123));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(99));


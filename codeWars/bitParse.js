/*
In this kata your task is to create bit calculator. 
Function arguments are two bit representation of numbers ("101","1","10"...), 
and you must return their sum in decimal representation.

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7);
parseInt and some Math functions are disabled.

Those Math functions are enabled: pow,round,random

*/

function calculate(num1,num2){
  var n1 = 0;
  var n2 = 0;
  for(var i = 0; i < num1.length; i++){
    var power = i;
    var spot = num1[num1.length - 1 - i];
    if(spot === '1'){
      n1 += (Math.pow(2, i));
    }
  }
  for(var i = 0; i < num2.length; i++){
    var power = i;
    var spot = num2[num2.length - 1 - i];
    if(spot === '1'){
      n2 += (Math.pow(2, i));
    }
  }
  return n1 + n2;
}

console.log(calculate('101', '101'));
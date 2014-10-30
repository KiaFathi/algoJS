/*
Imagine you landed a new job as a cashier...
Your quirky boss found out that you're a programmer and has a weird request 
about something they've been wondering for a long time.
Write a function that, given:
an amount of money
a list of coin denominations
computes the number of ways to make amount of money with coins of the available 
denominations.
Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your 
program would output 4—the number of ways to make 4¢ with those denominations:
1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

*/

var makeChange = function(amount, denominations){
  var res = 0;
  var subroutine = function(index, total){
    var current = denominations[index];
    if(index === 0){
      total % current === 0 && res++;
      return;
    }
    while(total >= 0){
      subroutine(index - 1, total);
      total -= current;
    }
  };
  subroutine(denominations.length - 1, amount);
  return res;
};

console.log(makeChange(4, [1,2,3]));
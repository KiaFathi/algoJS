/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the 
numbers from 1 to 20?
*/

function smallestEvenlyDivisible(n){
  var flag;
  var num = 1;
  while(!flag){
    num++;
    flag = true;
    for(var i = 2; i <= n; i++){
      if(num % i){
        flag = false;
      }
    }
  }
  return num;
}


//This is horrible time complexity!!!!
console.log(smallestEvenlyDivisible(20));
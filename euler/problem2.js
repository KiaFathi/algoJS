/*
Each new term in the Fibonacci sequence is generated by adding the previous two 
terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

function fibSumBelow(n){
  var digits = [1,2];
  var net = 2;
  var flag = true;
  while(flag){
    var sum = digits[0] + digits[1];
    if(sum > n){
      flag = false;
    } else {
      if(!(sum & 1)){
        net += sum;
      }
      digits[0] = digits[1];
      digits[1] = sum;
    }
  }
  return net;
}

console.log(fibSumBelow(4000000));
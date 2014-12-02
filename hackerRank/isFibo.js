/*

Problem Statement

You are given an integer, N. Write a program to determine if N is an element of the Fibonacci Sequence.

The first few elements of fibonacci sequence are 0,1,1,2,3,5,8,13.... A fibonacci sequence is one where every element is a sum of the previous two elements in the sequence. The first two elements are 0 and 1.

Formally:

fib0 = 0 
fib1 = 1 
fibn = fibn-1 + fibn-2 ∀ n > 1

Input Format 
The first line contains T, number of test cases. 
T lines follows. Each line contains an integer N.

Output Format 
Display IsFibo if N is a fibonacci number and IsNotFibo if it is not a fibonacci number. The output for each test case should be displayed in a new line.

Constraints 
1 <= T <= 10 ** 5 
1 <= N <= 10 ** 10

Sample Input

3
5
7
8
Sample Output

IsFibo
IsNotFibo
IsFibo
Explanation 
5 is a Fibonacci number given by fib5 = 3 + 2 
7 is not a Fibonacci number 
8 is a Fibonacci number given by fib6 = 5 + 3
*/

function processData(input) {
  //Enter your code here
  var inputArr = input.split('\n');
  var res = [];
  var max = Math.pow(10,10);
  var fibs = {
    0: true,
    1: true,
  };
  var curFibs = [0,1];
  while(curFibs[1] <= max){
    var newFib = curFibs[0] + curFibs[1];
    fibs[newFib] = true;
    curFibs[0] = curFibs[1];
    curFibs[1] = newFib;
  }
  for(var i = 1; i < inputArr.length; i++){
    var cur = inputArr[i];
    if(fibs[cur]){
      res.push('IsFibo');
    } else {
      res.push('IsNotFibo');
    }
  }
  console.log(res.join('\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

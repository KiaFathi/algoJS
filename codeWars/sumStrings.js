/*
Given the string representations of two integers, return the string 
representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the 
ten numerals "0" to "9".

*/

function sumStrings(a,b) { 
  var arrA = a.split('').reverse();
  var arrB = b.split('').reverse();
  var ans = '';
  var i = 0;
  var carry = 0;
  while(arrA[i] !== undefined || arrB[i] !== undefined){
    var a = parseInt(arrA[i]) || 0;
    var b = parseInt(arrB[i]) || 0;
    var sum = a + b + carry;
    if(sum > 9){
      carry = 1;
      sum -= 10;
      ans = parseInt(sum) + ans;
    }
    else {
      carry = 0;
      ans = parseInt(sum) + ans;
    }
    i++;
  }
  if(carry){
    ans = '1' + ans;
  }
  var flag = false;
  while(!flag){
    flag = true;
    if(ans[0] === '0'){
      flag = false;
      ans = ans.substring(1);
    }
  }
  return ans;
}


console.log(sumStrings('123','456'));//579
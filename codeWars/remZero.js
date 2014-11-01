/*
Write a function that takes an array of values and moves all elements that are 
zero to the end of the array, otherwise preserving the order of the array. 
The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements 
that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not 
allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {
  //want to partition this array with 0s and non-zeros
  var sorted = false;
  while(!sorted){
    sorted = true;
    for(var i = 0; i < array.length; i++){
      var cur = array[i];
      var nex = array[i+1];
      if((cur === 0 || cur === '0') && (nex !== '0' && nex !== 0 && nex !== undefined)){
        array[i] = array[i+1];
        array[i+1] = cur;
        sorted = false;
      }
    }    
  }
  return array;
}

var kia = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
removeZeros(kia);
console.log(kia);
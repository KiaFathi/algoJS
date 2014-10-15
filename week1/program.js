'use strict';
/* Given an unsorted list of numbers, determine the number of inversions
 * determine the number of inversions in that array
 */

var fs = require('fs');

var filename = process.argv[2];
var integerArray;
var count = 0;

fs.readFile(filename, 'utf8', function(err, data){
  if(err){
    throw err;
  }
  console.log('Created array from: ' + filename);
  integerArray = data.toString().split('\n');
  countInversions(integerArray);
  console.log(count);
});

/* Function to count inversions. The max number of inversions in an array of 
 * length n is n choose 2, or n(n - 1)/ 2
 *
 * Plan: x = Sort and Count inversions in first half of array
 *       y = Sort and Count inversions in second half of array
 *       z = Merge and Count split inversions
 *       return x + y + z
 *
 * Strategy: Use merge sort and count recursive calls here to track inversions
 *
 */

function countInversions(array){
  var arrayA = array.slice(0, Math.floor(array.length/2));
  var arrayB = array.slice(Math.floor(array.length/2));
  if(arrayA.length > 1){arrayA = countInversions(arrayA);}
  if(arrayB.length > 1){arrayB = countInversions(arrayB);}
  var a = 0;
  var b = 0;
  var newArray = [];
  while(!!arrayA[a] && !!arrayB[b]){
    if(arrayA[a] > arrayB[b]){
      newArray.push(arrayB[b]);
      b++;
      count += arrayA.length - a;
    } else {
      newArray.push(arrayA[a]);
      a++;
    }
  }
  if(!!arrayA[a]){ 
    newArray = newArray.concat(arrayA.slice(a));
    count += arrayB.slice(b).length;
  } else {
    newArray = newArray.concat(arrayB.slice(b));
  }  
  return newArray;
}

 
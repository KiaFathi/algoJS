'use strict';

//at worst time complexity = nLog(n)
var mergeSort = function(array){
  var arrayA = array.slice(0, Math.floor(array.length/2));
  var arrayB = array.slice(Math.floor(array.length/2));
  if(arrayA.length > 1){arrayA = mergeSort(arrayA);}
  if(arrayB.length > 1){arrayB = mergeSort(arrayB);}
  var newArray = [];
  var a = 0;
  var b = 0;
  while(newArray.length < (arrayA.length + arrayB.length)){
    if(arrayA[a] < arrayB[b] || (arrayB[b] === undefined && arrayA[a] !== undefined)){
      newArray.push(arrayA[a]);
      a++;
    } 
    else if(arrayB[b] <= arrayA[a] || (arrayA[a] === undefined && arrayB[b] !== undefined)){
      newArray.push(arrayB[b]);
      b++;
    }
  }
  return newArray;

};

mergeSort([8,1,3,7,6,4,5,2,9]);
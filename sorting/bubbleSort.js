'use strict';

//at worst n^2
var bubbleSort = function(array){
  var sorted = false;
  while(!sorted){
    var swapCount = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i + 1] = temp;
        swapCount++;
      }
    }
    if(!swapCount){
      sorted = true;
    }
    console.log(array);
  }
  return array;
};

bubbleSort([9,8,7,6,5,4,3,2,1]);
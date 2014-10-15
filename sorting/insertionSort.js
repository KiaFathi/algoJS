'use strict';

//worse case = n^2
var insertionSort = function(array){
  var newArray = [];
  while(array.length){
    var item = array.pop();
    if(!newArray.length){
      newArray.push(item);
    } else {
      var spot = 0;
      while(item > newArray[spot]){
        spot++;
      }
      newArray.splice(spot, 0, item);
    }
  }
  return newArray;
};

insertionSort([8,1,3,7,6,4,5,2,9]);
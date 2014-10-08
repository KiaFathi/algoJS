'use strict';


//n^2 time complexity
var selectionSort = function(array){
  var start = 0;
  while(start < array.length){
    var min = start;
    for(var i = start + 1; i < array.length; i++){
      if((array[i] <= array[min])) {min = i;}
    }
    if(start !== min){
      var temp = array[start];
      array[start] = array[min];
      array[min] = temp;      
    }
    start++;
  }
  return array;
};

selectionSort([8,1,3,7,6,4,5,2,9]);
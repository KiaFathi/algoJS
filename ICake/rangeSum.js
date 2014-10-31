/*
I have an array where every number in the range 1...n appears once except for 
one number which appears twice. Write a function for finding the number that 
appears twice.
*/


//if given n, can do in linear time w/o sort, but since not given n
//i find n using sort to find last item

var findRangeDupe = function(array){
  array = array.sort(function(a,b){
    return a-b;
  });
  var arrSum = 0;
  var sum = 0;
  for(var i = array[0]; i <= array[array.length -1]; i++){
    sum += i;
  }
  for(var i = 0; i < array.length; i++){
    arrSum += array[i];
  }
  return arrSum - sum;
};



console.log(findRangeDupe([1,2,3,4,5,6,7,7,8,9,10,11,12,13]));
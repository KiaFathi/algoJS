//best case = n(log(n))
//average = n(log(n))
//worst case = n^2
//want to implement in place

var quickSort = function(array){
  function partition(left, right){
    var pivotPoint = left + Math.floor(Math.random()* (right - left));
    var pivot = array[pivotPoint];
    for(var i = left; i < right; i++){
      if(i !== pivotPoint){
        var cur = array[i];
        if(cur > pivot && i < pivotPoint){
          array[i] = array[pivotPoint];
          array[pivotPoint] = cur;
          pivotPoint = i;
        } else if(cur < pivot && i > pivotPoint){
          array[pivotPoint] = cur;
          array[i] = pivot;
          pivotPoint = i;
        }
      }
    }
    console.log('--------------------------------------');
    console.log('left', left);
    console.log('pivotPoint', pivotPoint);
    console.log('right', right);
    console.log('--------------------------------------');
    if(right - left > 1){
      partition(left, pivotPoint);
      partition(pivotPoint, right);      
    }
  }
  partition(0, array.length);
  return array;
};

console.log(quickSort([4, 3, 5, 2, 1]));
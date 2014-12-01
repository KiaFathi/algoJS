/*
You have to write an algorithm that flatten an arrays structure to 2 levels. 
It means that each array under the second level will be merge to its parent. 
Only two levels are kept.

Empty arrays are ignored.

var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
flattenTwoLevels(array); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) // should return [1,[2,3,4,5]]
*/

function flattenTwoLevels(array) {
  //iterate through array, find arrays, subroutine
  function subroutine(array){
    var i = 0;
    while(i < array.length){
      var cur = array[i];
      if(cur.constructor === Array){
        var length = cur.length;
        Array.prototype.slice.apply(array, [i].concat(cur));
        i += length;
      }
      i++;
    }
  }
  var j = 0;
  while(j < array.length){
    if(array[j].constructor === Array ){
      subroutine(array[j]);
    }
    j++;
  }
  return array;
}


console.log(flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]));

console.log(flattenTwoLevels([1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18]));
/*

Complete the method on Array called 'sameStructureAs' to return true when its 
argument is an Array that has the same nesting structure as the 'this' array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared that 
returns whether its argument is an array.

*/

Array.prototype.sameStructureAs = function (other) {
  if(other.constructor !== Array){
    return false;
  } else {
    emptyNested(this);
    emptyNested(other);
    var arr1Str = JSON.stringify(this);
    var res1 = '';
    var arr2Str = JSON.stringify(other);
    var res2 = '';
    for(var i = 0; i < arr1Str.length; i++){
      var cur = arr1Str[i];
      if(cur === '['){
        res1 += 1;
      } else if (cur === ']'){
        res1 += 2;
      } else if (cur === ','){
        res1 += 3;
      }
    }
    for(var i = 0; i < arr2Str.length; i++){
      var cur = arr2Str[i];
      if(cur === '['){
        res2 += 1;
      } else if (cur === ']'){
        res2 += 2;
      } else if (cur === ','){
        res2 += 3;
      }
    }
    return res2 === res1;
  }
};

function emptyNested(array){
  for(var i = 0; i < array.length; i++){
    if(array[i].constructor === Array){
      emptyNested(array[i]);
    } else {
      delete array[i]
    }
  }
}
var kia = ['a', 'b', 'c', ['a', 'b', 'c', ['a', 'b', 'c', ['a', 'b', 'c']]]];
emptyNested(kia);
console.log(kia)


console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

 // should return false 
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// should return true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ]) );

//false
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));
/*
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

*/

var adjPins = {
  1: [1,2,4],
  2: [1,2,3,5],
  3: [2,3,6],
  4: [1,4,5,7],
  5: [2,5,4,6,8],
  6: [3,6,5,9],
  7: [4,7,8],
  8: [5,8,7,9,0],
  9: [6,8,9],
  0: [8,0],
};

function getPINs(observed) {
  // TODO: This is your job, detective!
  var res = [];
  var subroutine = function(index, str){
    if(str.length === observed.length){
      return;
    }
    var choices = adjPins[observed.charAt(index)];
    for(var i = 0; i < choices.length; i++){
      var newStr = str + choices[i];
      if(newStr.length === observed.length){
        res.push(newStr);
      } else {
        subroutine(index + 1, newStr);
      }
    }      
  };
  subroutine(0, '');
  return res;
}

console.log(getPINs('11'));
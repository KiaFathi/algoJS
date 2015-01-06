/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row 
and column are set to 0.
*/

var exMatrix = [[1,2,3,5,6],[1,2,3,4,5],[6,7,0,1,2],[0,1,2,3,4]];

var setZeroes = function(matrix){
  var yHash = {};
  var xHash = {};
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === 0){
        yHash[i] = true;
        xHash[j] = true;
      }
    }
  }

  for(var y = 0; y < matrix.length; y++){
    for(var x = 0; x < matrix[y].length;x++){
      if(yHash[y] || xHash[x]){
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
};


console.log(setZeroes(exMatrix));


/*
Given an image represented by an NxN matrix, where each pixel in the image is 4 
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/


/* Space Complexity: O(n), Time Complexity: O(n) */
var exMatrix = [[1,2,3],[4,5,6],[7,8,9]];

function rotateMatrix(matrix){
  var N = matrix.length;
  
  var newMatrix = [];
  //Populate rows of new Matrix
  for(var i = 0; i < N; i++){
    newMatrix.push([]);
  }

  //Iterate through old matrix adding items into new matrix
  for(var i = 0; i < N; i++){
    for(var j = 0; j < N; j++){
      var item = matrix[i][j];
      newMatrix[j][N-1-i] = item;
    }
  }
  return newMatrix;
}

console.log(rotateMatrix(exMatrix));

//Rotate in Place?

function rotateInPlace(matrix){
  //Dunno how to do!
}
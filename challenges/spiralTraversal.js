
function matrixSpiral(matrix){
  //Convert matrix into flat array in clock wise spiral order
  var result = [];
  
  //Establish initial boundaries for traversal
  var lowerY = 0;
  var upperY = matrix.length - 1;
  var lowerX = 0;
  var upperX = matrix[0].length - 1;

  //Iterate while still in bounds
  while(lowerY <= upperY && lowerX <= upperX){

    //Move from upper left to upper right
    for(var x = lowerX; x <= upperX; x++){
      result.push(matrix[lowerY][x]);
    }
    
    //Increment lowerY
    lowerY++;

    //Move upper right to bottom right
    for(var y = lowerY; y <= upperY; y++){
      result.push(matrix[y][upperX]);
    }

    //Decrement upperX
    upperX--;

    //Move bottom right to bottom left
      //Make sure still in bounds at this point
    if(upperY >= lowerY){
      for(var x = upperX; x >= lowerX; x--){
        result.push(matrix[upperY][x]);
      }

      //Decrement upperY
      upperY--;      
    }

    //Move bottom left to top left
      //Make sure still in bounds at this point
    if(upperX >= lowerX){
      for(var y = upperY; y >= lowerY; y--){
        result.push(matrix[y][lowerX]);
      }
      //Increment lowerX
      lowerX++;
    }
  }
  // Print result joined by space, like prompt
  console.log(result.join(' '));
}
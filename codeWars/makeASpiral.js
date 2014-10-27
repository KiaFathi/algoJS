/* 
Make a NxN spiral with given size(n).

n = 5

[
  [1,1,1,1,1],
  [0,0,0,0,1],
  [1,1,1,0,1],
  [1,0,0,0,1],
  [1,1,1,1,1]
]

*/

var spiralize = function(n){
  //make n by n matrix
  var matrix = [];
  for(var i = 0; i < n; i++){
    var innerArray = [];
    for(var j = 0; j < n; j++){
      innerArray.push(0);
    }
    matrix.push(innerArray);
  }
  //correctly change values to 1's if neccessary
  var lowerX = 0;
  var upperX = n - 1;
  var lowerY = 0;
  var upperY = n - 1;

  while(lowerX <= upperX && lowerY <= upperY){
    //move tr to tl
    var i;

    console.log('moved tl to tr');
    for(i = lowerX; i <= upperX; i++){
      matrix[lowerY][i] = 1;
    }
    console.log(matrix);
    matrix[lowerY + 1][i - 1] = 1;
    lowerY += 2;

    console.log('moved tr to br');
    if(lowerY < upperY - 1){
      for(i = lowerY; i <= upperY; i++){
        matrix[i][upperX] = 1;
      }
      if(matrix[i-2][upperX - 1] === 0){
        console.log(i, upperX);
        matrix[i-1][upperX - 1] = 1;
      }
      console.log(matrix);
    }
    upperX -= 2;

    console.log('moved br to bl');
    if(upperX - 1 > lowerX){    
      for(i = upperX; i >= lowerX; i--){
        if(!matrix[upperY][i-1]){
          matrix[upperY][i] = 1;
        }
      }
      if(matrix[upperY-2][i+1] === 0){
        matrix[upperY-1][i+1] = 1;
      }
      console.log(matrix);
    }
    upperY -=2;

    console.log('moved bl to tl');
    for(i = upperY; i > lowerY; i--){
      if(!matrix[i-1][lowerX]){
        matrix[i][lowerX] = 1;
      }
    }
    if(matrix[i + 1][lowerX + 2] === 0 && matrix[i+2][lowerX + 2] === 0){
      matrix[i+1][lowerX + 1] = 1;
    }
    console.log(matrix);    
    lowerX += 2;
  }

  return matrix;
};


//tests
console.log(spiralize(5));
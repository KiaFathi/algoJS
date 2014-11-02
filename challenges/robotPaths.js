/**
 *  
 *  A robot located at the top left corner of a nxn grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */


 //moving right = position[1] + 1;
 //moving left = position[1] - 1;
 //moving down = position[0] + 1;
 //moving up = position[0] - 1;

function robotPaths(n){
  if(n === 0){
    return 0;
  }
  var count = 0;
  var board = [];
  for(var i = 0; i < n; i++){
    var arr = [];
    for(var j = 0; j < n; j++){
      arr.push(1);
    }
    board.push(arr);
  }
  var subroutine = function(board, y, x){
    if(y === n-1 && x === n-1){
      count++;
      return;
    } else {
      board[y][x] = 0;
      if(board[y][x+1]){
        subroutine(board, y, x + 1);
        board[y][x+1] = 1;
      }
      if(board[y][x-1]){
        subroutine(board, y, x - 1);
        board[y][x-1] = 1;
      }
      if(board[y+1] !== undefined && board[y+1][x]){
        subroutine(board, y + 1, x);
        board[y+1][x] = 1;
      }
      if(board[y-1] !== undefined && board[y-1][x]){
        subroutine(board, y - 1, x);
        board[y-1][x] = 1;
      }
    };
  };
  subroutine(board, 0, 0);
  return count;
};

console.log(robotPaths(6));


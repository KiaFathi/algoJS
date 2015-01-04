/*
Write a function that does the following:

Input: "AAABBBCCCDDDAAA"
Output: "A3B3C3D3A3"

Current problems: 
  Doesnt handle case where new string is greater in length

Time Complexity: O(n), Space Complexity: O(n)
*/

function compressor(str){
  var resArray = [];
  var prev = str[0];
  var count = 1;

  for(var i = 1; i < str.length; i++){
    var cur = str[i];
    //check if current character is equal to previous
    if(prev === cur){
      count++;
    } else if(prev){
      resArray.push(prev + count);
      prev = cur;
      count = 1;
    }
  }
  resArray.push(prev + count);
  return resArray.join('');
}

console.log(compressor('AAABBBCCCDDDAAA'));
console.log(compressor('CCCDDEFGHIJKABCCCCCCCCCCCC'));

/*
I like parentheticals (a lot).
"Sometimes (when I nest them (my parentheticals) too much (like this 
(and this))) they get confusing."

Write a function that, given a sentence like the above, along with the position
of an opening parenthesis, finds the corresponding closing parenthesis.
Example: if the example string above is input with the number 10 (position of
the first parenthesis), the output should be 79 (position of the last 
parenthesis).

*/

function matchingParens(string, index){
  var stack = [];
  var matches = {
    '(':')',
    '{':'}',
    '[':']'
  };
  for(var i = index; i < string.length; i++){
    var cur = string[i];
    if(cur === stack[stack.length -1]){
      stack.pop();
      if(stack.length === 0){
        return i;
      }
    } else if (matches[cur]){
      stack.push(matches[cur]);
    }
  }
  return false;
}


var exString = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

console.log(matchingParens(exString, 10));
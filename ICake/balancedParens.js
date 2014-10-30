/*
You're working with an intern that keeps coming to you with JavaScript code that
won't run because the braces, brackets, and parentheses are off. To save you 
both some time, you decide to write a braces/brackets/parentheses validator.

Let's say:
'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's 
openers and closers are properly nested.

Examples:
"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

*/


function balancedParens(string){
  var stack = [];
  var pairs = {
    '[':']',
    '{':'}',
    '(':')'
  };
  var closers = {
    ')': 1,
    ']': 1,
    '}': 1
  };
  for(var i = 0; i < string.length; i++){
    var cur = string[i];
    if(pairs[cur]){
      stack.push(pairs[cur]);
    } else if(cur in closers){
      if(stack[stack.length -1] === cur){
        stack.pop();
      } else{
        return false;
      }
    }
  }
  return !stack.length;
}


console.log(balancedParens("{ [ ] ( ) }"));
console.log(balancedParens("{ [ ( ] ) }"));
console.log(balancedParens("{ [ }"));
var ast = { tag: 'seq',
           left: { tag: 'seq',
              left: { tag: 'note', pitch: 'b4', dur: 1 },
              right: { tag: 'note', pitch: 'a4', dur: 2 } },
           right:
            { tag: 'seq',
             left: { tag: 'note', pitch: 'e4', dur: 3 },
            right: { tag: 'note', pitch: 'g4', dur: 4 } 
            } 
          };

var reverse = function(exp){
  var revExp = {};
  if(exp.tag === 'seq'){
    revExp.tag = exp.tag;
    revExp.right = reverse(exp.left);
    revExp.left = reverse(exp.right);
  } else if(exp.tag === 'note') {
    revExp = exp;
  }
  return revExp;
};


var endTime = function(startTime, exp){
  if(exp.tag === 'seq'){
    startTime += endTime(0, exp.left);
    startTime += endTime(0, exp.right);
  } else {
    startTime += exp.dur;
  }
  return startTime;
};


// var compile = function (exp) {
//   // your code here
//   var res = [];
//   var runningTime = 0;
// };


console.log(endTime(ast, 0));
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
  } else if(exp.tag === 'par'){
    var max = Math.max(endTime(0, exp.left), endTime(0, exp.right));
    startTime += max;
  } else {
    startTime += exp.dur;
  }
  return startTime;
};


var expWPar = 
{ tag: 'seq',
  left: { tag: 'note', pitch: 'c4', dur: 250 },
  right:
   { tag: 'par',
     left: { tag: 'note', pitch: 'e4', dur: 250 },
     right: { tag: 'note', pitch: 'g4', dur: 250 } } };


/*compile expected output

[ { tag: 'note', pitch: 'a4', start: 0, dur: 250 },
  { tag: 'note', pitch: 'b4', start: 250, dur: 250 },
  { tag: 'note', pitch: 'c4', start: 500, dur: 500 },
  { tag: 'note', pitch: 'd4', start: 1000, dur: 500 } ]

*/


// this compiler can only handle seq, not par
var compile = function (exp) {
  var res = [];
  var runTime = 0;
  var subroutine = function(expression, resArray){
    if(expression.tag === 'note' || expression.tag === 'rest'){
      var newNote = {};
      newNote.tag = expression.tag;
      newNote.pitch = expression.pitch || '––';
      newNote.start = runTime;
      newNote.dur = expression.dur;
      resArray.push(newNote);
      runTime += expression.dur;
    } else if(expression.tag === 'seq'){
      subroutine(expression.left, resArray);
      subroutine(expression.right, resArray);
    } else if(expression.tag === 'par'){
      var prevRun = runTime;
      subroutine(expression.left, resArray);
      runTime = prevRun;
      subroutine(expression.right, resArray);
    } else if(expression.tag === 'repeat'){
      for(var i = 0; i < expression.count; i++){
        subroutine(JSON.parse(JSON.stringify(expression.section)), resArray);
      }
    }
  };
  subroutine(exp, res);
  return res;
};

var melodyMus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'a4', dur: 250 },
         right: { tag: 'note', pitch: 'b4', dur: 250 } },
      right:
       { tag: 'seq',
         left: 
          {tag: 'seq',
           left: {tag: 'rest', dur: 100},
           right: { tag: 'note', pitch: 'c4', dur: 500 }
          },
         right: 
          { tag: 'repeat',
            section: { tag: 'note', pitch: 'c4', dur: 250 },
            count: 3 }
         }
    };

console.log(melodyMus);
console.log(compile(melodyMus));
/*
Your company built an in-house calendar tool called HiCal. You want to add a 
feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. In HiCal, a 
meeting is stored as a tuple of integers (start_time, end_time). These integers 
represent the number of 30-minute blocks past 9:00am.

For example:
  (2, 3) # meeting from 10:00 – 10:30 am
  (6, 9) # meeting from 12:00 – 1:30 pm

Write a function condense_meeting_times() that takes an array of meeting time 
ranges and returns an array of condensed ranges.

For example, given:
  [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
your function would return:
  [(0, 1), (3, 8), (9, 12)]

Do not assume the meetings are in order. The meeting times are coming from 
multiple teams.

In this case the possibilities for start_time and end_time are bounded by the 
number of 30-minute slots in a day. But soon you plan to refactor HiCal to store 
times as Unix timestamps (which are big numbers). Write something that's 
efficient even when we can't put a nice upper bound on the numbers representing 
our time ranges.

*/

function rangeMerges(meetingsArray){
  var condensedArray = [];
  var res = [];
  for(var i = 0; i < meetingsArray.length; i++){
    var tuple = meetingsArray[i];
    for(var j = tuple[0]; j <= tuple[1]; j++){
      condensedArray[j] = 1;
    }
  }
  var start = null;
  var streak = 0;
  for(var i = 0; i < condensedArray.length + 1; i++){
    if(condensedArray[i] === 1){
      if(start === null){
        start = i;
      }
      streak += 1;
    } else {
      res.push([start, start + streak - 1]);
      start = null;
      streak = 0;
    }
  }
  //iterate through meetings
    //check if tuple[0] is greater than other tuple[0] and < other tuple[1]
      //if true, take other tuple[0] 
  console.log(res);
  return condensedArray;
}

console.log(rangeMerges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
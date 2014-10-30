/*
I have an array stockPricesYesterday where:
The indices are the time, as a number of minutes past trade opening time, 
which was 9:30am local time.
The values are the price of Apple stock at that time, in dollars.
For example, the stock cost $500 at 10:30am, so stockPricesYesterday[60] = 500.
Write an efficient algorithm for computing the best profit I could have made 
from 1 purchase and 1 sale of 1 Apple stock yesterday. For this problem, we won't 
allow "shorting"—you must buy before you sell.

*/

function stockReturn(array){
  var currentMin = array[0];
  var maxProfit = 0;
  for(var i = 1; i < array.length; i++){
    var cur = array[i];
    if(cur < currentMin){
      currentMin = cur;
    }
    else {
      if(cur - currentMin > maxProfit){
        maxProfit = cur - currentMin;
      }
    }
  }
  return maxProfit;
}


var exArray = [1,2,3,4,5,6,7,8,6,106];
console.log(stockReturn(exArray));


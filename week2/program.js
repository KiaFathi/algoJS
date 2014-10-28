var fs = require('fs');



/*

Your task is to compute the total number of comparisons used to sort the given 
input file by QuickSort. As you know, the number of comparisons depends on which
elements are chosen as pivots, so we'll ask you to explore three different 
pivoting rules.
You should not count comparisons one-by-one. Rather, when there is a recursive 
call on a subarray of length m, you should simply add m−1 to your running total 
of comparisons. (This is because the pivot element is compared to each of the 
other m−1 elements in the subarray in this recursive call.)

WARNING: The Partition subroutine can be implemented in several different ways, 
and different implementations can give you differing numbers of comparisons. For 
this problem, you should implement the Partition subroutine exactly as it is 
described in the video lectures (otherwise you might get the wrong answer).

DIRECTIONS FOR FIRST PROBLEM:

For the first part of the programming assignment, you should always use the 
first element of the array as the pivot element.

DIRECTIONS FOR LAST PROBLEM:

Compute the number of comparisons (as in Problem 1), always using the final 
element of the given array as the pivot element. Again, be sure to implement the 
Partition subroutine exactly as it is described in the video lectures. Recall 
from the lectures that, just before the main Partition subroutine, you should 
exchange the pivot element (i.e., the last element) with the first element.

DIRECTIONS FOR MEDIAN PROBLEM:

Compute the number of comparisons (as in Problem 1), using the "median-of-three" 
pivot rule. [The primary motivation behind this rule is to do a little bit of 
extra work to get much better performance on input arrays that are nearly sorted 
or reverse sorted.] In more detail, you should choose the pivot as follows. 
Consider the first, middle, and final elements of the given array. (If the array 
has odd length it should be clear what the "middle" element is; for an array 
with even length 2k, use the kth element as the "middle" element. So for the 
array 4 5 6 7, the "middle" element is the second one ---- 5 and not 6!) 
Identify which of these three elements is the median (i.e., the one whose value 
is in between the other two), and use this as your pivot. As discussed in the 
first and second parts of this programming assignment, be sure to implement 
Partition exactly as described in the video lectures (including exchanging the 
pivot element with the first element just before the main Partition subroutine).

EXAMPLE: For the input array 8 2 4 5 7 1 you would consider the first (8), 
middle (4), and last (1) elements; since 4 is the median of the set {1,4,8}, 
you would use 4 as your pivot element.

SUBTLE POINT: A careful analysis would keep track of the comparisons made in 
identifying the median of the three candidate elements. You should NOT do this. 
That is, as in the previous two problems, you should simply add m−1 to your 
running total of comparisons every time you recurse on a subarray with length m.


*/
var filename = process.argv[2];
var pivotType = process.argv[3] || 0;
var integerArray;
var count = 0;


/* expected answers for test cases
size   first(0)   last(1)   median(2)
10     25         29        21
100    615        587       518
1000   10297      10184     8921
*/

fs.readFile(filename, 'utf8', function(err, data){
  if(err){
    throw err;
  }
  console.log('Created array from: ' + filename);

  integerArray = data.toString().split('\n');

  integerArray = integerArray.map(function(item){
    return parseInt(item);
  });

  pivot(integerArray, 0, integerArray.length, pivotType);
  console.log(count);
});


//type 0 === first
//type 1 === last
  //swap chosen element with first element and then pFirst
//type 2 === median of three
  //median = Math.floor(array.length/2)
  //pick middle value of first,last and median
  //swap chosen element with first element and then pFirst

function pivot(array, l, r, type){
  if(r - l < 2){
    return;
  } else {
    count += r - l - 1;
  }

  if(type === '1'){
    var temp = array[r-1];
    array[r-1] = array[l];
    array[l] = temp;
  }
  if(type === '2'){
    var first = array[l];
    var last = array[r-1];
    var mp = l + Math.floor((r-1-l)/2);
    var mid = array[mp];
    if((last >= mid && last <= first)||(last >= first && last <= mid) && last !== first){
      array[l] = last;
      array[r-1] = first;
    } else if((mid >= last && mid <= first) || (mid >= first && mid <= last) && first !== mid){
      array[l] = mid;
      array[mp] = first;
    }     
  }
  var p = array[l];
  var i = l + 1;
  for(var j = l + 1; j < r; j++){
    if(array[j] < p){
      var swap = array[i];
      array[i] = array[j];
      array[j] = swap;
      i++;
    }
  }
  array[l] = array[i-1];
  array[i-1] = p;
  pivot(array, l, i-1, type);
  pivot(array, i, r, type);
}

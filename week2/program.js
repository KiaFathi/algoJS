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
var integerArray;
var count = 0;


/* expected answers for test cases
size   first      last      median
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
  for(var i = 0; i < integerArray.length; i++){
    integerArray[i] = parseInt(integerArray[i]);
  }
  console.log(integerArray.length);
});


function quickSort(array){
  //every recursive call, increment count by length - 1 of subarray
}

function pFirst(array){
}

function pLast(array){

}

function pMOT(array){
  //median = Math.floor(array.length/2)
  //pick middle value of first,last and median
}
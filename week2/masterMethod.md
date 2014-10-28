T(n) <= aT(n/b) + O(n^d)
  a = number of recursive calls
  b = size decrease of each recursive calls
  d = work per call, constant = 0
       1. a = b^d
        - O(n^dlogn)
       1. a < b^d
        - O(n^d)
       1. a > b^d
        - O(n^logb(a))

  * a(log base b of n) = number of leaves

For example:

1. Merge Sort
  a = 2
  b = 2
  d = 1
  O(nlog(n))

1. Binary Search on Sorted Array
  a = 1
  b = 2
  d = 0, constant time 1 comparison
  O(nlog(n))

1. Gradeschool multiplication
  a = 4
  b = 2
  d = 1
  O(n^log(base2) of 4)

1. Gauss' Trick for Multiplication
  a = 3
  b = 2
  d = 1
  O(n ^ log(2)^(3)) roughly O(n^1.59)




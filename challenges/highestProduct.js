/*
Given an array_of_ints, find the highest_product you can get from three of the integers.
The input array_of_ints will always have at least three integers.
*/

function highestProductOf3(array){
  //sort array ascending, O(n(log(n)))
  array.sort(function(a, b){
    return a - b;
  });
  console.log(array);
  //potential products
  var product1 = array[0] * array[1] * array[array.length - 1];

  var product2 = array[array.length -1] * array[array.length - 2] * array[array.length - 3];

  return Math.max(product1, product2);
}


var exArray = [22, 33, 44, 55, -100, -22, 33, 44, 55, 66, 77, 88];

console.log(highestProductOf3(exArray));
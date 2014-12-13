/*
You have an array of integers, and for each index you want to find the product 
of every integer except the integer at that index.

Write a function get_products_of_all_ints_except_at_index() that takes an array 
of integers and returns an array of the products.

For example, given:
  [1, 7, 3, 4]
your function would return:
  [84, 12, 28, 21]

*/

function productOfOtherNumbers(array){
  var sum = array.reduce(function(mem, item){
    return mem * item;
  }, 1);
  return array.map(function(item, index){
    if(item === 0){
      return array.reduce(function(mem, item, idx){
        if(index === idx){
          return mem;
        } else {
          return mem * item;
        }
      }, 1);
    }
    return sum / item;
  });
}

console.log(productOfOtherNumbers([1, 7, 0, 3, 4]));
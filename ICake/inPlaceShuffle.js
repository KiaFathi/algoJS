/*
Write a function for doing an in-place ↴ shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have 
the same probability of ending up in each spot in the final array.
Assume that you have a function get_random(floor, ceiling) for getting a random 
integer that is >=floor and <=ceiling.
*/

Array.prototype.shuffle = function(){
  var length = this.length;
  var i, j, temp;
  for(i = length - 1; i >= 0; i--){
    j = Math.floor(Math.random()*(i+1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

var testArray = [1,2,3,4,5,6,7,8,9,10];
console.log(testArray.shuffle());
console.log(testArray);
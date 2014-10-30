/*
Write an extended stack class that has a function getLargest() for returning 
the largest element in the stack.
*/

var Stack = function(){
  this.storage = [];
};

Stack.prototype.push = function(value){
  this.storage.push(value);
};

Stack.prototype.isEmpty = function(value){
  return !!this.storage.length;
};

Stack.prototype.pop = function(){
  return this.storage.pop();
};

Stack.prototype.peek = function(){
  return this.storage[this.storage.length-1];
};

Stack.prototype.getLargest = function(){
  var max;
  for(var i = 0; i < this.storage.length; i++){
    var cur = this.storage[i];
    if(max === undefined || cur > max){
      max = cur;
    }
  }
  return max;
};


//maybe implementing a Heap would make this better
//rules of heaps
  //if a is parent of b, a is ordered wrt b
  //if highest priority is always at root
//heaps can be implemented as arrays
  //children at indices (l) 2i + 1 and (r) 2i + 2
    //i.e. child of 0 at 1 and 2
  //parent is found at Math.floor(i-1/2)
    // (p)3
    // (c) 7 8
var MaxHeap = function(){
  this.storage = [];
};

MaxHeap.prototype.swap = function(index1, index2){
  this.storage[index1] ^= this.storage[index2];
  this.storage[index2] ^= this.storage[index1];
  this.storage[index1] ^= this.storage[index2];
};

MaxHeap.prototype.insert = function(value){
  this.storage.push(value);
  var spot = this.storage.length - 1;
  var parent = Math.floor((spot-1)/2);
  while(this.storage[spot] > this.storage[parent] && parent >= 0){
    console.log(this.storage);
    this.swap(spot, parent);
    spot = parent;
    parent = Math.floor((spot-1)/2);
    console.log(this.storage);
  }
};

var kia = new MaxHeap();

kia.insert(1);
kia.insert(2);
kia.insert(3);
kia.insert(4);
kia.insert(5);
kia.insert(6);

console.log(kia);
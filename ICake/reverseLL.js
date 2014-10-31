/*
Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list ↴ .
Your function will have one input: the head of the list.
Your function should return the new head of the list.

*/

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.reverse = function(){
  var stack = [];
  var list = this;
  this.each(function(node){
    stack.push(node);
    list.removeHead();
  });
  while(stack.length){
    this.addNodeToTail(stack.pop());
  }
  this.tail.next = null;
};

LinkedList.prototype.makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

LinkedList.prototype.addToTail = function(value){
  var node = this.makeNode(value);
  if(this.head === null){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.addNodeToTail = function(node){
  if(this.head === null){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  var node = this.head;
  if(this.head === this.tail){
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return node;
};

LinkedList.prototype.each = function(callback){
  var node = this.head;
  while(node !== null){
    callback(node);
    node = node.next;
  }
};

LinkedList.prototype.contains = function(value){
  var node = this.head;
  var found = false;
  while(node !== null && !found){
    if(node.value === value){
      found = true;
    }
    node = node.next;
  }
  return found;
};

var kia = new LinkedList();
kia.addToTail(1);
kia.addToTail(2);
kia.addToTail(3);
kia.reverse();
console.log(kia);

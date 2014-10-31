/*
You have a singly-linked list and want to check if it contains a cycle.
A singly-linked list is built with Nodes, where each node has:
node.next—the next node in the list.

node.data—the data held in the node. For example, if our linked list stores 
people in line at the movies, node.data might be the person's name.

A cycle occurs when a node’s next points back to a previous node in the list. 
The linked list is no longer linear with a beginning and end—instead, it cycles 
through a loop of nodes.

Write a function contains_cycle() that takes the first node in a singly-linked 
list and returns a boolean indicating whether the list contains a cycle.
For this problem, you cannot make any changes to the Node class.
*/

var LinkedList = function(){
  this.head = null;
  this.tail = null;
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

LinkedList.prototype.containsCycle = function(){
  var visited = [];
  var start = this.head;
  var circular = false;
  while(!circular && start !== null){
    if(visited.indexOf(start) < 0){
      visited.push(start);
      start = start.next;
    } else {
      circular = true;
    }
  }
  return circular;
};

var kia = new LinkedList();
kia.addToTail(1);
kia.addToTail(2);
kia.addToTail(3);
console.log(kia);
console.log(kia.containsCycle());

var cKia = new LinkedList();
cKia.addToTail(1);
cKia.addToTail(2);
cKia.addToTail(3);
cKia.tail.next = cKia.head;
console.log(cKia);
console.log(cKia.tail);
console.log(cKia.containsCycle());
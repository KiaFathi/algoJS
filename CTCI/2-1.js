/*
Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

var createNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

LinkedList.prototype.addToTail = function(value){
  var node = createNode(value);
  if(this.tail === null){
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeNode = function(node){
  if(node.next !== null){
    node.value = node.next.value;
    node.next = node.next.next;    
  } else {
    var target = this.head;
    while(target.next !== node){
      target = target.next;
    }
    target.next = null;
    this.tail = target;
  }
};

var exList = new LinkedList();
exList.addToTail(1);
exList.addToTail(2);
exList.addToTail(3);
exList.addToTail(1);
exList.addToTail(4);

LinkedList.prototype.removeDups = function(){
  var hash = {};
  var pointer = this.head;
  while(pointer !== null){
    console.log('AT POINTER', pointer);
    if(hash[pointer.value]){
      this.removeNode(pointer);
      console.log('REMOVED!', pointer);
    } else {
      hash[pointer.value] = true;
      pointer = pointer.next;
    }
  }
};

exList.removeDups();

console.log(exList);

//Follow Up Answer
  //Would have 2 pointers, and iterate from n+1 to check if is duplicate, at worst is n^2
function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value){
  var node = new Node(value);
  if(this.tail === null){
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.addNodeToTail = function(node){
  if(this.tail === null){
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeFromHead = function(){
  var node = this.head;
  if(this.tail === node){
    this.tail = null;
  }
  if(this.head !== null){
    this.head = this.head.next;
  }
  node.next = null;
  return node;
};

LinkedList.prototype.addToHead = function(value){
  var node = new Node(value);
  node.next = this.head;
  if(this.tail === null){
    this.tail = node;
  }
  this.head = node;
};

LinkedList.prototype.addNodeToHead = function(node){
  node.next = this.head;
  if(this.tail === null){
    this.tail = node;
  }
  this.head = node;
};

LinkedList.prototype.reverse = function(){
  var stack = [];
  while(this.head !== null){
    stack.push(this.removeFromHead());
  }
  while(stack.length){
    this.addNodeToTail(stack.pop());
  }
};

LinkedList.prototype.delete = function(value){
  var node = this.head;
  if(node.value === value){
    this.removeFromHead();
  } else {
    while(node !== null){
      var next = node.next;
      if(next !== null && next.value === value){
        node.next = next.next;
      }
      node = node.next;    
    }
  }
};

LinkedList.prototype.add = function(linkedList){
  var node1 = this.head;
  var node2 = linkedList.head;
  var carry = 0;
  var res = new LinkedList();
  while(node1 !== null || node2 !== null || carry === 1){
    var value1 = node1 !== null ? node1.value : 0;
    var value2 = node2 !== null ?node2.value : 0;
    var sum = value1 + value2 + carry;
    carry = 0;

    if(sum > 9){
      sum -=10;
      carry = 1;
    }
    res.addToTail(sum);
    if(node1 !== null){
      node1 = node1.next;
    }
    if(node2 !== null){
      node2 = node2.next;
    }
  }
  return res;
};

var LL = new LinkedList();
LL.addToTail(1);
LL.addToTail(2);
LL.addToTail(3);
console.log(LL);
LL.reverse();
console.log(LL);
LL.addToTail(4);
LL.addToTail(5);
LL.delete(3);
console.log(LL);
LL.delete(1);
console.log(LL);

var LL1 = new LinkedList();
LL1.addToTail(4);
LL1.addToTail(5);
LL1.addToTail(6);

var LL2 = new LinkedList();
LL2.addToTail(7);
LL2.addToTail(8);
LL2.addToTail(9);

console.log(LL1.add(LL2));
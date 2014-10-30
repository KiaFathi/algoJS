/*
Implement a queue with 2 stacks. Your queue should have an enqueue and 
a dequeue function and it should be "first in first out" (FIFO).
Optimize for the time cost of m function calls on your queue. These can be any 
mix of enqueue and dequeue calls.
Assume you already have a stack implementation and it gives O(1) time push and 
pop.

*/

var Stack = function(){
  this.storage = [];
};

Stack.prototype.push = function(value){
  this.storage.push(value);
};

Stack.prototype.pop = function(value){
  return this.storage.pop();
};

Stack.prototype.size = function(){
  return this.storage.length;
};

var Queue = function(){
  //create an outbox for things to be removed from
  this.outbox = new Stack();
  //create an inbox for things to be added into
  this.inbox = new Stack();
};

Queue.prototype.enqueue = function(value){
  this.inbox.push(value);
};

Queue.prototype.dequeue = function(){
  //if the outbox is empty, want to refill it with inbox items
  if(!this.outbox.size()){
    while(this.inbox.size()){
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};
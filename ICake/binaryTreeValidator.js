/*
Write a function to check that a binary tree ↴ is a valid binary search tree.

A binary search tree is a binary tree in which, for each node:
The node's value is greater than all values in the left subtree.
The node's value is less than all values in the right subtree.
BSTs are useful for quick lookups. If the tree is balanced, we can search for 
a given value in the tree in O(lg(n)) time.
*/

var BinaryTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

BinaryTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right !== null){
      this.right.insert(value);
    } else {
      this.right = new BinaryTree(value);
    }
  } else {
    if(this.left !== null){
      this.left.insert(value);
    } else {
      this.left = new BinaryTree(value);
    }
  }
};


function validateBST(bst){
  var val = bst.value;
  if(bst.right !== null){
    if(bst.right.value < val){
      return false;
    } else {
      if(!validateBST(bst.right)){
        return false;
      }
    }
  }
  if(bst.left !== null){
    if(bst.left.value > val ){
      return false;
    } else {
      if(!validateBST(bst.left)){
        return false;
      }
    }
  }
  return true;
}














var testTree = new BinaryTree(1);
testTree.insert(5);
testTree.insert(3);
testTree.insert(2);
testTree.left = {
  left: null,
  right: null,
  value: 100
};

console.log(validateBST(testTree));
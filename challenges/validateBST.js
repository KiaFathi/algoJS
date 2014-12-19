function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.addRightChild = function(value){
  var rightChild = new BinaryTree(value);
  this.right = rightChild;
};

BinaryTree.prototype.addLeftChild = function(value){
  var leftChild = new BinaryTree(value);
  this.left = leftChild;
};


BinaryTree.prototype.validateBST = function(){
  var flag = true;
  function subroutine(node, upperBound, lowerBound){
    if(node.value > upperBound || node.value < lowerBound){
      flag = false;
      return;
    } else {
      if(node.left !== null){
        subroutine(node.left, node.value, lowerBound);
      }
      if(node.right !== null){
        subroutine(node.right, upperBound, node.value);
      }
    }
  }
  subroutine(this, Infinity, -Infinity);
  return flag;
};


var validTree = new BinaryTree(5);
validTree.addLeftChild(3);
validTree.addRightChild(8);
validTree.right.addLeftChild(6);
validTree.left.addRightChild(4);
console.log(validTree.validateBST());

var invalidTree = new BinaryTree(5);
invalidTree.addLeftChild(3);
invalidTree.addRightChild(8);
invalidTree.right.addLeftChild(4);
console.log(invalidTree.validateBST());

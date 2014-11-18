/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

function bind(func, context){
  var args = Array.prototype.slice.call(arguments, 2);
  return function(){
    var innerArgs = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, innerArgs);
  };
}

var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
};

var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result);
console.log(result === 'foobar'); // true

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(context){
  var args = Array.prototype.slice.call(arguments,1);
  var that = this;
  return function(){
    var innerArgs = args.concat(Array.prototype.slice.call(arguments));
    return that.apply(context, innerArgs);
  };
};


var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
};

var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'


var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar') // true


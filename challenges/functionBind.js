

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


Function.prototype.bind = function(context){
  var args = Array.prototype.slice.call(arguments,1);
  var that = this;
  return function(){
    var innerArgs = args.concat(Array.prototype.slice.call(arguments));
    return that.apply(context, innerArgs);
  };
};



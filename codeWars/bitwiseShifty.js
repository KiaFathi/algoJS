/*
Here are all the possible 2's complement numbers in a 3-bit system: (binary == decimal)
011 == 3
010 == 2
001 == 1
000 == 0
111 == -1
110 == -2
101 == -3
100 == -4

Now the problem; Extend the Number prototype with a function called "twos" that 
accepts one parameter (n), and when called, returns the two's-complement 
representation of the number in "n" bits in a string.
*/

Number.prototype.twos = function(n) {
  if(this > 0){
    var bits = this.toString(2);
    while(bits.length < n){
      bits = '0' + bits;
    }
    return bits;
  }
  else{
    var max2 = 1 << n;
    var diff = max2 - Math.abs(this);
    var base = diff.toString(2);
    while(base.length < (n-1)){
      base = '0' + base;
    }
    return base.substring(0,1) === '1' ? base : '1' + base;
  }
};

console.log(2..twos(5)); // 00010
console.log((-3).twos(3)); // 101

// Number.prototype.twos = function(n){
//   var bits = (this & ((1 << n) - 1)).toString(2);
//   console.log(bits);
//   return new Array(n - bits.length + 1).join('0') + bits;
// };

// (-5).twos(5); //11011
/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(n){
  var ans = 1;
  var primes = {};
  for(var i = 2; i <= Math.floor(Math.pow(n, 1/2)); i++){
    if(i & 1){
      primes[i] = true;
    }
  }
  //clean up with sieve
  for(var key in primes){
    var val = parseInt(key);
    if(primes[key]){
      for(var i = val + val; i <= Math.floor(Math.pow(n, 1/2)); i += val){
        primes[i] = false;
      }      
    }
  }
  var res = [];
  for(var key in primes){
    if(primes[key] && !(n%parseInt(key))){
      res.push(parseInt(key));
    }
  }

  return res;
}

console.log(largestPrimeFactor(600851475143));
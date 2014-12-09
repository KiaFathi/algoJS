/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that 
the 6th prime is 13.

What is the 10 001st prime number?
*/


console.log(nthPrime(parseInt(process.argv[2])));


function nthPrime(nth){
  var primes = [2], next = 3, div, i, limit, isPrime;
  while(primes.length<nth){
    div = 3; 
    i = 1;
    limit= Math.sqrt(next)+1;
    isPrime= true;
    while(div<limit){
      if(next%div === 0){
          isPrime = false;
          div = limit;
      }
      else {
        div = primes[i++] || div+ 2;
      }
    }
    if(isPrime){
      primes.push(next);
    }
    next += 2;
  }
  return primes[primes.length-1];
}
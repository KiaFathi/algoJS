'''
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
'''

# def nthPrime(n):
#   count = 1
#   primes = [2, 3]
#   while(count < n):
#     current = primes[len(primes)-1] + 2
#     index = 0
#     divisor = primes[index]
#     print current
#     count += 1
#   print primes

# nthPrime(2) nthPrime(3)

li = [1,2,3]

#TODO

try: 
  print li[3]
except IndexError:
  print 'Error!'

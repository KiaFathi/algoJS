'''
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
'''

def largestPrimeFactor(number):
  root = int(number ** (0.5))
  primes = {}
  largestPrimeFactor = 0
  for i in range(2, root):
    primes[i] = True

  for key in primes.keys():
    for i in range(key + key, root, key):
      primes[i] = False
    if(number % key != 0):
      primes[key] = False

  for key in primes.keys():
    if(primes[key] and key > largestPrimeFactor):
      largestPrimeFactor = key

  return largestPrimeFactor


print largestPrimeFactor(600851475143)
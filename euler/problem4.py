def isPalindrome(num):
  numStr = str(num)
  i = 0
  j = len(numStr) - 1
  while(i <= j):
    if(numStr[i] != numStr[j]):
      return False
    i+= 1
    j-= 1
  return True

def largestPalindrome(digits):
  largestPal = 0
  upperBound =  10 ** digits - 1
  for i in range(upperBound - (10 ** (digits - 1)), upperBound):
    for j in range(upperBound - (10 ** (digits - 1)), upperBound):
      product = i * j
      if isPalindrome(product) and product > largestPal:
        largestPal = product
  return largestPal


print largestPalindrome(3)
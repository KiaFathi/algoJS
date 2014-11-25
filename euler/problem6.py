def diffOfSquares(upperBound):
  sumOfSquares = 0
  squareOfSums = 0
  for i in range(1, upperBound + 1):
    sumOfSquares += i ** 2
    squareOfSums += i
  squareOfSums = squareOfSums ** 2
  return squareOfSums - sumOfSquares


print diffOfSquares(100)
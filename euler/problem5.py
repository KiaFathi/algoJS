def smallestEvenlyDivisible(n):
  num = n
  flag = False
  while(flag == False):
    num += n
    flag = True
    for i in range(2, n + 1):
      if(num % i != 0):
        flag = False
  return num    

print smallestEvenlyDivisible(20)

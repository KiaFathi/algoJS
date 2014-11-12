/*
You are a renowned thief who has recently switched from stealing precious metals 
to stealing cakes because of the insane profit margins. You end up hitting the 
jackpot, breaking into the world's largest privately owned stock of cakes—the 
vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited 
supply of each type. 

Each type of cake has a weight and a value, stored in tuples with two positions:
An integer representing the weight of the cake in kilograms
An integer representing the monetary value of the cake in British pounds

For example:
  # weighs 7 kilograms and has a value of 160 pounds
(7, 160)

# weighs 3 kilograms and has a value of 90 pounds
(3, 90)

You brought a duffel bag that can hold limited weight, and you want to make off 
with the most valuable haul possible.

Write a function max_duffel_bag_value() that takes an array of cake tuples and a 
weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:
  cake_tuples = [(7, 160), (3, 90), (2, 15)]
capacity    = 20

max_duffel_bag_value(cake_tuples, capacity)
# returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think 
about cakes that weigh nothing or duffel bags that can't hold anything. But we're 
not just super mastermind criminals—we're also meticulous about keeping our 
algorithms flexible and comprehensive.


*/


//This is an incorrect solution, need to do greedy approach and bubble up
function maxDuffelBagValue(cakeTuples, capacity){
  //Want to sort my cake tuples by value/weigth
  var value = 0;
  cakeTuples = cakeTuples.sort(function(a, b){
    return b[1]/b[0] - a[1]/a[0];
  });
  //Now that cakes are sorted, want to populate my bag with cakes one at a time
  //selecting the highest value cake
  var currentCake = 0;
  while(cakeTuples[currentCake] !== undefined && cakeTuples[currentCake][0] <= capacity && capacity > 0){
    capacity -= cakeTuples[currentCake][0];
    value += cakeTuples[currentCake][1];
    while(cakeTuples[currentCake] && cakeTuples[currentCake][0] > capacity){
      currentCake++;
    }  
  }
  return value;
}

console.log(maxDuffelBagValue([[7, 160], [3, 90], [2, 15]], 20)); //expect 555
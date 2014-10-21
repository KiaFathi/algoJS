'use strict';
var ancestry = JSON.parse(require('./ancestry.js'));

var hash = {};
ancestry.forEach(function(item){
  hash[item.name] = item;
});

var knowParent = ancestry.filter(function(item){
    return hash[item.mother] !== undefined;
  });

var ans = knowParent.map(function(item){
    return item.born - hash[item.mother].born;
  }).reduce(function(total, current){
    return total + current;
  }, 0)/knowParent.length;

console.log(ans);
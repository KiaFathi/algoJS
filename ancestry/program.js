'use strict';
var ancestry = JSON.parse(require('./ancestry.js'));

var females = ancestry.filter(function(item){
  return item.sex === 'f';
});

var hash = females.reduce(function(prev, cur){
  prev[cur.name] = {};
  prev[cur.name].born = cur.born;
  prev[cur.name].died = cur.died;
  prev[cur.name].mother = cur.mother;
  return prev;
}, {});

var daughters = females.filter(function(item){
  return hash[item.mother] !== undefined;
});

var sumObj = daughters.reduce(function(sum, cur){
  if(hash[cur.mother]){
    sum.sum += cur.born - hash[cur.mother].born;
    sum.num++;
    return sum;
  } else {
    return sum;
  }
}, {'sum': 0, 'num' : 0});

var ans = sumObj.sum/daughters.length;
console.log(ans);


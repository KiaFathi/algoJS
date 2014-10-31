var mCD = require('./minCutDetector');
var should = require('chai').should();

console.log(mCD.readAdjList('testCase1.txt'));

describe('readAdjList', function(){
  
  it('should correctly read testCase1.txt', function(){
    (typeof mCD.readAdjList('testCase1.txt')).should.equal('object');
  });
  
});

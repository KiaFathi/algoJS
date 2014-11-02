var fs = require('fs');

function readAdjList(fileName){
  console.log('Testing: ' + fileName);
  var resultsArray = [];
  for(var i = 0; i < parseInt(process.argv[3]); i++){
    fs.readFile(fileName, 'utf8', function(err, data){
      if(err){
        throw err;
      }

      var adjList = {};

      data.toString().split('\n').forEach(function(str){
        var arr = str.split(' ');
        adjList[arr[0]] = [];
        for(var i = 1; i < arr.length; i++){
          adjList[arr[0]].push(arr[i]);
        }
      });
      resultsArray.push(findMinCut(adjList));
      if(resultsArray.length === parseInt(process.argv[3])){
        console.log(Math.min.apply(null, resultsArray));
      }
    });    
  }
}

/**
The file contains the adjacency list representation of a simple undirected graph. 
There are 200 vertices labeled 1 to 200. The first column in the file represents 
the vertex label, and the particular row (other entries except the first column) 
tells all the vertices that the vertex is adjacent to. So for example, the 6th row 
looks like : "6  155 56  52  120 ......". This just means that the vertex with 
label 6 is adjacent to (i.e., shares an edge with) the vertices with labels 
155,56,52,120,......,etc

Your task is to code up and run the randomized contraction algorithm for the 
min cut problem and use it on the above graph to compute the min cut. (HINT: 
Note that you'll have to figure out an implementation of edge contractions. 
Initially, you might want to do this naively, creating a new graph from the old 
every time there's an edge contraction. But you should also think about more 
efficient implementations.) (WARNING: As per the video lectures, please make 
sure to run the algorithm many times with different random seeds, and remember 
the smallest cut that you ever find.) Write your numeric answer in the space 
provided. So e.g., if your answer is 5, just type 5 in the space provided.

*/
//Pseudo Code of the Algorithm
  //While there are > 2 vertices
    //randomly sample remaining vertices
    //pick two that are connected
    //merge or contract 2 vertices into one have to join their edges


/*Expected testCase outcomes:

1: 1
2: 2
3: 1
4: 1
5: 3

*/


function randomSelectEdge(adjList){
  var vertices = Object.keys(adjList);
  var randV = vertices[Math.floor(Math.random()*vertices.length).toString()];
  var edges = adjList[randV];
  var randE = edges[Math.floor(Math.random()*edges.length)];
  return [randV, randE];
}

function contract(adjList){
  var target = randomSelectEdge(adjList);
  var superNode = target[0];
  var byeNode = target[1];
  for(var vertex in adjList){
    var edges = adjList[vertex];
    if(vertex !== byeNode){
      for(var i = 0; i < edges.length; i++){
        if(edges[i] === byeNode){
          edges[i] = superNode;
        }
      }
    } 
    else {
      for(var i = 0; i < edges.length; i++){
        adjList[superNode].push(edges[i]);
      }
    }
  }
  adjList[superNode] = adjList[superNode].filter(function(item){
    return item !== superNode;
  });
  delete adjList[byeNode];
  return adjList;
}

function findMinCut(adjList){
  while(Object.keys(adjList).length > 2){
    contract(adjList);
  }
  var keys = Object.keys(adjList);
  return adjList[keys[0]].length;
}

readAdjList(process.argv[2]);

var fs = require('fs');

function readAdjList(fileName){
  fs.readFile(fileName, 'utf8', function(err, data){
    if(err){
      throw err;
    }
    console.log('Created array from: ' + fileName);

    var hash = {};

    //if the input is kargerMinCut then you have to split arr differently '\t'
    data.toString().split('\n').forEach(function(str){
      var arr = str.split(' ');
      hash[arr[0]] = [];
      for(var i = 1; i < arr.length; i++){
        hash[arr[0]].push(arr[i]);
      }
    });
    console.log(hash);
  });
};

readAdjList(process.argv[2]);

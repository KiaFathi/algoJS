/*
Description:

Complete the solution so that it returns the number of times the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )
so that overlapping solutions are (not) counted. If the searchText is empty, it should return "0". Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') # should return 1
searchSubstr( 'aaa', 'aa' ) # should return 2
searchSubstr( 'aaa', '' ) # should return 0
searchSubstr( 'aaa', 'aa', false ) # should return 1
*/

function searchSubstr(fullText, searchText, allowOverlap ){
 if(allowOverlap === undefined){allowOverlap = true;}
 if(!searchText.length || !fullText.length){
  return 0;
 }
 if(!allowOverlap){
  var re = new RegExp(searchText, 'g');
  return fullText.match(re).length;
 }
 else{
  var count = 0;
  for(var i = 0; i < fullText.length; i++){
    var region = fullText.substring(i, i+searchText.length);
    if(region === searchText){
      count++;
    }
  }
  return count;
 }
}

function searchSubstr( t, s, o ){
  return(t.length===0||s.length===0)?0:t.match(new RegExp((o||(o==undefined))?"(?=("+s+"))":s,"g")).length; 
}

console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
console.log(searchSubstr('aaabbbcccc', 'bbb')); // should return 1
console.log(searchSubstr( 'aaa', 'aa' )); // should return 2
console.log(searchSubstr( 'aaa', '' )); // should return 0
console.log(searchSubstr( 'aaa', 'aa', false )); // should return 1
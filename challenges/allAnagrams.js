/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

 function allAnagrams(string){
  var anagrams = [];
  var subroutine = function(template, anagram){
    if(!template.length){
      anagrams.push(anagram);
    } else {
      for(var i = 0; i < template.length; i++){
        var nextAnagram = anagram + template[i];
        var newTemplate = template.substring(0,i) + template.substring(i+1);
        subroutine(newTemplate, nextAnagram);
      }
    }
  };
  subroutine(string, '');
  return anagrams;
 }

 console.log(allAnagrams('abc'));
/*
Your friend won't stop texting his girlfriend. It's all he does. All day. 
Seriously. The texts are so mushy too! The whole situation just makes you feel 
ill. Being the wonderful friend that you are, you hatch an evil plot. While he's 
sleeping, you take his phone and change the autocorrect options so that every 
time he types "you" or "u" it gets changed to "your sister."

Write a function called autocorrect that takes a string and replaces all 
instances of "you" or "u" (not case sensitive) with "your sister" (always lower case).

Return the resulting string.

Here's the slightly tricky part: These are text messages, so there are 
different forms of "you" and "u".

For the purposes of this kata, here's what you need to support:

"youuuuu" with any number of u characters tacked onto the end
"u" at the beginning, middle, or end of a string, but NOT part of a word
"you" but NOT as part of another word like youtube or bayou
If you complete this kata and there are no issues, please remember to give 
it a ready vote and a difficulty rating. :)
*/

function autocorrect(input){
  var re = /^(you+|u)(?!\w)/i;
  return input.split(' ').map(function(word){
    return word.replace(re, 'your sister'); 
  }).join(' ');
}


var kia = 'You u youville utube you youyouyou uuu raiyou united youuuu u you';

var expected = 'your sister your sister youville utube your sister youyouyou uuu raiyou united your sister your sister your sister';


console.log(autocorrect(kia));
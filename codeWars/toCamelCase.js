/*
Complete the method/function so that it converts dash/underscore delimited words 
into camel casing. The first word within the output should be capitalized only 
if the original word was capitalized.

Examples:

toCamelCase("the-stealth-warrior") 
// returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior")
// returns "TheStealthWarrior"

*/

function toCamelCase(str){
  var re = /[_|-](\w)/g;
  return str.replace(re, function(match, c1){
    return c1.toUpperCase();
  });
}

console.log(toCamelCase("the-stealth-warrior"));

console.log(toCamelCase("The_Stealth_Warrior"));

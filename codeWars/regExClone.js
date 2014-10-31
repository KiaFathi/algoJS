/*
Make a utility function to clone a regex object that will give exactly the 
same results as the original. The functionality should be able to be used in 
two methods: RegExp.clone(/regex/) and (/regex/).clone(). Just because. ;P
*/

RegExp.clone = function(regex) {
  // ...
  return new RegExp(regex.toString());
};

RegExp.prototype.clone = function() {
  // ...
  return new RegExp(this.toString());
};
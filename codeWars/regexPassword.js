/*
Description:

You need to write regex that will validate a password to make sure it meets 
the follwing criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

function validate(password) {
  var valid = password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.length > 5 && password.match(/[0-9]/g)
   && !password.match(/[\W]/g);
  return valid;
}
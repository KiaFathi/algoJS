/*

ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. 
The last digit can be either on the range 0 to 9 or the letter 'X' used to 
indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by their position 
has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
Complete the validISBN10() function.

validISBN10('1112223339') ; should return true
validISBN10('1234554321') ; should return true
validISBN10('1234512345') ; should return false

*/

function validISBN10(isbn) {
  // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  if(!isbn.match(/^\d{9}[\d|'X']$/)){
    return false;
  }  
  var sum = 0;
  for(var i = 0; i < isbn.length; i++){
    if(i === 9 && isbn[i] === 'X'){
      console.log(i, isbn[i]);
      sum += 10;
    } else {
      var cur = parseInt(isbn[i]);
      sum += cur * (1 + i);      
    }
  }
  return sum % 11 === 0;
}


console.log(validISBN10('1112223339'));
console.log(validISBN10('11122X3339'));
console.log(validISBN10('1234554321'));
console.log(validISBN10('1234512345'));
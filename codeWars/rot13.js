/*
How can you tell an extrovert from an introvert at NSA? 
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. 
Maybe you can decipher it? According to Wikipedia, 
ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently 
used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitute characters. 
Not spaces, punctuation, numbers etc. Test examples:
*/




function rot13(str) {
  return str.replace(/[a-zA-Z]/g,function(c){
    return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
  });
}


console.log(rot13("EBG13 rknzcyr."))// == "ROT13 example.");
console.log(rot13("This is my first ROT13 excercise!")) // == "Guvf vf zl svefg EBG13 rkprepvfr!")
console.log(rot13('Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl\'f fubrf.'));
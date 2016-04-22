function binaryAgent(str) {

// regex: remove all spaces
str = str.replace(/\s/g,"");

// var for the converted string
var converted = "";

// loop that iterates through the argument str, converting 8 characters of binary at a time 
while (str.length > 0){
  // declare a variable to pull out an 8 character chunk of binary
  var eightChunk = str.substring(0,8);
  
  // chop off the 8 characters from argument str
  str = str.substring(8);
  
  // declare a variable that converts the 8 character binary chunk to base 10
  var temp = parseInt(eightChunk,2);
  
  // convert base 10 number to string, append to converted string
  converted += String.fromCharCode(temp);
}

// return the converted string
return converted;  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

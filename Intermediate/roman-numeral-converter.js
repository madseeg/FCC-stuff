function convertToRoman(num) { 
  // arrays representing corresponding numeral values and roman values, length 13
  // note that this is only good for 4999 or less !!!
  var numValues = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanValues = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];  
  
  // the romanized string
  var romanized = '';
  
  // iterate through the array of numerical values to process num
  for (var j=0;j<numValues.length;j++) {
    
    // nested loop: process num moving left to right, loop iteration will convert thousands, hundreds, then ones
    while(num >= numValues[j]) {      
      
      // remove numeral value from num that has a corresponding romanized value. ex: 36 - 10 = 20
      num -= numValues[j];
      
      // add romanized value to string. ex: 10 = X
      romanized += romanValues[j];     
    }    
  }  
    
  //return romanized string;
  return romanized;     
}

convertToRoman(4999);

function palindrome(str) {
  // Good luck!  
  if (str.replace(/[^A-Za-z0-9]/g, '').toLowerCase() === reverseString(str).replace(/[^A-Za-z0-9]/g, '').toLowerCase()){
    return true;    
  }
  else {
    return false;
  }    
}

function reverseString(str) {
  var backwards = str.split('').reverse().join('');
  return backwards;
}

palindrome("0_0 (: /-\ :) 0-0");

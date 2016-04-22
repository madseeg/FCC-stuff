function fearNotLetter(str) {   
  
  // iterate through all characters in the string
  for (var i=1;i<str.length;i++){ 
    // 97 98 99 101
    
    // difference > 1 between the 2 character codes means letter is missing, so return the charactercode - 1           
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1)
      {        
        return String.fromCharCode(str.charCodeAt(i)-1);
      }
    
  }
  // all letters are present, so return undefined
  return undefined;
}

fearNotLetter("abce");

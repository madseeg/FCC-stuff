function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // regex: insert a space between uppercase characters
  str = str.replace( /([a-z])([A-Z])/g, "$1 $2");    
      
  // regex: replace all underscores and spaces with hyphen, call function to lowercase entire string
  return str.replace(/[ _]/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

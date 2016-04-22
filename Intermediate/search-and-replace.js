function myReplace(str, before, after) {       
  // if before word has an upper case that needs to be preserved
  if (before[0] === before[0].toUpperCase()) {
    // replace on charAt(0) of after toUpperCase     
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());        
   }  
  // return replaced string
  return str.replace(before,after);  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

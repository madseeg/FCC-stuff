function pairElement(str) {
  
  // split the input string into an array
  var splitStr = str.split('');
  
  /* note to self on the pairs:
  AT
  CG
  GC
  TA  
  */
  
  // allPairs stores an array of pairs
  var allPairs = [];
  
  // iterate through however many pairs need to be made
  for(var j=0;j<splitStr.length;j++){
    switch (splitStr[j])  
    {
      case 'A' : allPairs.push(["A","T"]);
        break;
      case 'C' : allPairs.push(["C","G"]);
        break;
      case 'G' : allPairs.push(["G","C"]);         
        break;
      case 'T' : allPairs.push(["T","A"]);
        break;
    }
  }
  
  // return the result as array of pairs
  return allPairs; 
  
}

pairElement("GCG");

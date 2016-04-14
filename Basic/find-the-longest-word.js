function findLongestWord(str) {
  var wordArray = str.split(" ");  
  var longestWordPosition = 0;
  var longestWord;
  
  for (var x=0;x<wordArray.length;x++){
    if (wordArray[x].length >= wordArray[longestWordPosition].length){
      longestWordPosition = x;
    }    
  }
  
  return wordArray[longestWordPosition].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

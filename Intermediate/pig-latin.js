function translatePigLatin(str) {
  // regex vowels [aeiouAEIOU] 
  
  var firstVowel = str.search(/[aeiouAEIOU]/);
  var firstCon, splitStr = ''; 
  
  // if a word begins with a vowel, add "way"
  if (firstVowel === 0) {
    return str + "way";
    }
  else {     
      firstCon = str.substr(0,firstVowel); // gl
      splitStr = str.substr(firstVowel); // ove
      return splitStr + firstCon + "ay";
    }
}

translatePigLatin("glove");

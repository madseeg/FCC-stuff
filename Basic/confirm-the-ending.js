function confirmEnding(str, target) {                     
  if (target === str.substr(str.length - target.length)){
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");

function repeatStringNumTimes(str, num) {
  // repeat after me
  var newstr = "";
  for (var x=0;x<num;x++){
    newstr += str;
  }
  return newstr;
}

repeatStringNumTimes("abc", 3);

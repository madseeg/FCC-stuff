function mutation(arr) {
  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  
    for (var j=0;j<secondElement.length;j++){
      if (firstElement.indexOf(secondElement[j]) === -1){
          return false;
          }
    }
    return true;
  
}

mutation(["hello", "hey"]);

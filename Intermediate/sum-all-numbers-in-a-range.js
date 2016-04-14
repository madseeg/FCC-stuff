function sumAll(arr) {
  var lesserNum = Math.min(arr[0],arr[1]);
  var greaterNum = Math.max(arr[0],arr[1]);
  var newLength = greaterNum - lesserNum;
  var newArray = [];
  
  for (var i=0;i<newLength+1;i++){
    newArray[i] = lesserNum + i;    
  }
    
  return newArray.reduce(function(a,b){
    return a + b;
  });    
}

sumAll([1, 4]);

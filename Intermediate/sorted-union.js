function uniteUnique(arr1, arr2, arr3) {
  // convert the argument into an array
  var newArray = Array.prototype.slice.call(arguments); 
  
  // flatten newArray  
  var flatArray = newArray.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  
  // empty array for unique values
  var uniqueArray = [];
  
  // iterate through the flatArray
  for (var i=0;i<flatArray.length;i++) {
    
    // push unique values into uniqueArray
    if (uniqueArray.indexOf(flatArray[i]) == -1) {
          uniqueArray.push(flatArray[i]);          
        }
    }
  
  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

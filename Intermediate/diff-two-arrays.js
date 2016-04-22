function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.    
  
  diff1 = arr1.filter(function(x) { 
    return arr2.indexOf(x) < 0; 
  });
  
  diff2 = arr2.filter(function(x) { 
    return arr1.indexOf(x) < 0; 
  });
      
  return newArr.concat(diff1, diff2);   
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

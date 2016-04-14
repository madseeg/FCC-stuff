function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (var x=0;x<arr.length;x+=size){        
      newArr.push(arr.slice(x,x+size));
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

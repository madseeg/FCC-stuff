function bouncer(arr) {
  var tempArr = [];
  for (var i=0;i<arr.length;i++){
    if (arr[i]){
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

bouncer([7, "ate", "", false, 9]);

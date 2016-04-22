function steamrollArray(arr) {
var flatArray = [];
 
// recursive function to check if output is array 
var flatten = function(arg) {
  if (!Array.isArray(arg)){
    flatArray.push(arg);
  }
  else{
    for (var a in arg){
      flatten(arg[a]);
    }
  }
  
};

arr.forEach(flatten);
return flatArray;
  
}

steamrollArray([[["a"]], [["b"]]]);

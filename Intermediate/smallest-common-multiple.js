function smallestCommons(arr) {

// sort the array from biggest to smallest 
arr.sort(function(a, b) {
  return b - a;
  });

// store the range of numbers in a new array  
var newRange = [];
for (var i=arr[0];i>=arr[1];i--){
  newRange.push(i);
  }

// a * b = gcf(a,b) * lcm(a,b) so: lcm (a,b) = (a*b) / gcf(a, b)
// lcm function that calls gcf
function lcm (a, b) {
  return (a * b) / gcf(a,b);
}


// recursive application of euclid's algorithm for greatest common factor
function gcf(a,b) {
  
  // base case: if a divided by b has no remainder, return b
  if ((a%b) === 0){
    return b;
  }
  else {
    return gcf(b, a%b);
  }
}

// use reduce to apply the lcm function to all values in the newRange array and get a single value result
return newRange.reduce(function (a,b) {
  return lcm(a,b);
});
  
}

// return 60
smallestCommons([5,1]);

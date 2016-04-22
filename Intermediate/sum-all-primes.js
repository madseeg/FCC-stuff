function sumPrimes(num) {
  // 2 is the first prime number
  var sumNum = [2];  
  
  // start iterating loop at 3, up to and including provided number, test in increments of 2
  // 3, 5, 7, 9... notice the pattern that tries to minimize nonprime numbers
  for (var i=3;i<=num;i+=2){
    
    // if the number is prime, add to the array of prime numbers
    if (isPrime(i)) {
        sumNum.push(i);
        }
  }  
  
  // return array of prime numbers by applying reduce function that adds sum of entire array
  return sumNum.reduce(function(a, b) {
    return a + b;
  }); 
}

// helper function to test if prime number
function isPrime (num) {
  
  // 1 is not a prime number
  if (num < 2){
    return false;
  }
  
  // prime number algorithm, only iterate through half the possibilities of tested number
  for (var j=2;j<=(num/2);j++) {
      
      // remainder of zero, return false due to nonprime number, ex: 2 % 2, 4 % 2, but 5 % 2
      if (num % j === 0) {
        return false;
      }            
  }
  return true; 
}

sumPrimes(977);

function sumFibs(num) {
  // let fibNumbers[n] equate to position in series ex: fibNumbers[2] = 1
  var fibNumbers = [0,1]; 
  
  // calculate the fib numbers under num
  if (num > 2){
	  for (var i=2;i<=num;i++){
	  	if (fibNumbers[i-1] < num) {
	  	fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
	  	}
	  }	
  }
  
  // only return odd ones, up to and including num
  var oddFib = 0;
  for (var j=1;j<fibNumbers.length;j++){
  	if (fibNumbers[j] <= num && fibNumbers[j]% 2 > 0) {
  		oddFib += fibNumbers[j];
  	}
  }
  return oddFib;
  
}

sumFibs(1000);

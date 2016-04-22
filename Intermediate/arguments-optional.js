function addTogether() {  
  // if only one argument, return a function
  if (arguments.length == 1 && typeof arguments[0] === 'number') {   
    var x = arguments[0];
    return function(y) {
        
        // if the argument is a valid number, return a sum
   		if (typeof y === 'number'){
    		return x + y;
        }       
    };
  }
  
  // else if both arguments are numbers, return the sum of both
  else if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      return arguments[0] + arguments[1];
  }
}

addTogether([3]);

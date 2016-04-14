function factorialize(num) {
  /* iterative solution
  var factorial = 1;
  for (var i = 1; i<= num; i++)
    {
      factorial *= i;
    }
  return factorial;
  */
  
  
  // recursive solution
  if (num === 0){
    return 1;
  }
  else  {
     return num * factorialize (num - 1);
  }  
}

factorialize(5);

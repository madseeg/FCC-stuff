function destroyer(arr) {
  var argsToRemove = Array.prototype.slice.call(arguments,1);
  function remove(x) { return argsToRemove.indexOf(x) === -1; }
  return arguments[0].filter(remove);
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

function truthCheck(collection, pre) {

// for loop, inspect every property in the collection
for (var a in collection) {  
  
  // if value is not truthy, return false
  if (!collection[a][pre]) {
    return false;
  }
}

// loop completes, therefore return true
return true;

}

truthCheck([{"single": "yes"}], "single");

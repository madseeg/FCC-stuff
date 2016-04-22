function whereAreYou(collection, source) {
  // Only change code below this line  
  
  // filter that returns currentMembers of collection for the property keys in source and the value of that property key
  return collection.filter(function(currentMember) {
    for (var key in source) {            
        
        // if currentMember does not have the property key or the currentMember property key value does not match source property key's value, return false
        if (!currentMember.hasOwnProperty(key) || currentMember[key] != source[key]) {                    
          return false;          
        }
      }
    return true;
    });  
  
  // Only change code above this line  
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

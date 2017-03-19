var encode = function(userString){
  //1. Add code to turn string to lowercase
  lowerCaseString = userString.toLowerCase()
  // 2. Add code to change each instance of a, e, i, o to the appropriate number based on l33n rules
  userString = userString.toLowerCase().replace(/a/g, "4").replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/ /g, "$")
  // 3. Add code to replace spaces with dollar signs.

  //This line assigns the variable encode to the value userString
  return userString
}

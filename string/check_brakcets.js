function testBrackets(str) {
  const splittedArray = str.split("");
 
  const bracketsObj = {
    "(": 0,
    ")": 0,
    "[": 0,
    "]": 0,
  };
  for (const splittedItem of splittedArray) {
    if (bracketsObj.hasOwnProperty(splittedItem)) {
      bracketsObj[splittedItem] = bracketsObj[splittedItem] + 1;
    }
  }

  const checkNoBrackets = Object.values(bracketsObj).every((item) => item === 0);

    if (checkNoBrackets) {
        return 1;
    } 


  if (
    bracketsObj["("] !== bracketsObj[")"] ||
    bracketsObj["["] !== bracketsObj["]"]
  ) {
    return 0;
  }

  const finalResult = [1, +bracketsObj["("] + bracketsObj["]"]];

  return finalResult.join(" ");
}

console.log(testBrackets("hello world"));

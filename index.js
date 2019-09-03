var number;

//add a and b and return the result.
function add(a, b){
  number = a + b;
  return number;
}

//subtract a and b and return the result.
function subtract(a, b){
  number = a - b;
  return number;
}

//multiply a and b and return the result.
function multiply(a, b){
  number = a * b;
  return number;
}

//divide a and b and return the result.
function divide(a, b){
  number = a / b;
  return number;
}

//Increment a by 1 and return the result.
function inc(a){
  number = a + 1;
  return number;
}

//Decrement a by 1 and return the result.
function dec(a){
  number = a - 1;
  return number;
}

//Parse a as an integer and return that integer.
function makeInt(a){
  number = parseInt(a, 10);
  return number;
}

//Parse a as a float (number with decimals) and return that number.
function preserveDecimal(a){
  number = parseFloat(a, 10);
  return number;

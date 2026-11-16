// Start coding here
let calculator = {};
const add = (a, b) => {
    let result = a + b;
    return result;
  };
  
  const subtract = (a, b) => {
    let result = a - b;
    return result;
  };
  
  const multiply = (a, b) => {
    let result = a * b;
    return result;
  };
  
  const divide = (a, b) => {
    let result = a / b;
    return result;
  };
  
  calculator.add = add;
  calculator.subtract = subtract;
  calculator.multiply = multiply;
  calculator.divide = divide;
  
  let addResult = calculator.add(10, 20);
  console.log(addResult);
  
  let divideResult = calculator.divide(3000, 10);
  console.log(divideResult);
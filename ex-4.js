let add = (a,b) => {
    return a + b;    
};

let subtract = (a,b) => {
    return a - b;
};

let multiply = (a,b) => {
    return a * b;    
};

let divide = (a,b) => {
    return a / b;
};

console.log(add(25,49));
console.log(subtract(82,41));
console.log(multiply(79,15));
console.log(divide(144,12));


// Start coding here
let calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
};

let addResult = calculator.add (25,49);
console.log(addResult);

let divideResult = calculator.divide (144,12);
console.log(divideResult);


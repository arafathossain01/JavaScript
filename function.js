function add(a, b) {
  let sum = a + b;
  return sum;
}

let a = 50,
  b = 20;
console.log(`${a} + ${b} = ${add(a, b)}`);

// convert string to number

function calc(num1, operator, num2) {
  num1 *= 1; // convert into number
  num2 *= 1; // convert into number

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("not valid operator");
  }
}

console.log(calc("4", "+", "4"));

// javaScript treat a function like a variable

let myadd = function (num1, num2) {
  return num1 + num2;
};  // this function is anonimous function

console.log(myadd(10, 20));

console.log(myadd(myadd(10, 20), 30));

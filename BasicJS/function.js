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
}; // this function is anonimous function

console.log(myadd(10, 20));

console.log(myadd(myadd(10, 20), 30));

function add(num1, num2) {
  let result = num1 + num2;
  console.log(arguments);

  return result;
}
console.log(add(10, 20, 40)); // 40 stored in arguments object.

// Rest parameter

function rest(...arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

let num = [10, 20, 30, 40, 50, 60];

console.log(rest(...num)); // spred operator. convert array to number.

//object literals

let person = {
  name: "Arafat Hossain",
  age: 18,
  addr: {
    city: "Narayanganj",
    zip: 2321,
  },

  add: function sum(num1, num2) {
    let result = num1 + num2;
    return result;
  },
};
console.log(person.addr);
console.log(person.add(10, 20));

// calculator using arro function and object

let calculate = {
  add: (num1, num2) => num1 + num2,
  minus: (num1, num2) => num1 - num2,
  mul: (num1, num2) => num1 * num2,
  div: (num1, num2) => {
    if (num2 == 0) {
      console.log("input invalid.");
    } else {
      return num1 / num2;
    }
  },
};

console.log(calculate.mul(20, 10));

let number;
console.log(number); // undefined
number = 10;
console.log(number); // 10

let num = 5 + "5"; // doing concatenat
let join = "5" + 5; // also concatenat
console.log(num);
console.log(join);

let x = 5;
let y = x ** 2; // exponentiation
console.log(y);

let text = `He was a "Good" poet.`;
console.log(text);



// interview question
console.log(0.1 + 0.2 === 0.3); // false. 0.1 + 0.2 = 0.30000000000000004

let a = "25";
let b = "234.32px";
console.log(Number(a));
console.log(parseInt(b)); // convert string to number with int
console.log(parseFloat(b)); // convert string to numvber with floating value.

console.log((12.32).toPrecision(3)); // to define total digit

let random = Math.random()*100;
random = Number(random.toFixed(0)); // Number() function convert the string 
console.log(random);


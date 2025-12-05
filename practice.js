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

let a = "25";
let b = "234.32px";
console.log(Number(a));
console.log(parseInt(b)); // convert string to number with int
console.log(parseFloat(b)); // convert string to numvber with floating value.

console.log((12.32).toPrecision(3)); // to define total digit

let random = Math.random()*100;
random = Number(random.toFixed(0)); // Number() function convert the string 
console.log(random);

// sum of array element
let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);





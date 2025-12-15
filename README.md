## Using innerHTML

- element এর ভেতরে HTML tag সহ content সেট করতে
- নতুন HTML element যুক্ত করতে
- ট্যাগসহ লেখা দেখাতে
- structure পরিবর্তন করতে (div, p, span ইত্যাদি)

```js
document.getElementById("demo").innerHTML = "<b>Hello kiki</b>";
```

- লিখাকে bold করবে।

## Using innerText

- element এর ভিতরের শুধু visible text সেট করতে

```js
document.getElementById("demo").innerText = "<b>Hello kiki</b>";
```

- যেমন লিখা আছে tag সহ তেমনই দেখাবে।

## Variable & Literal

- Variable is a container where we store data

```js
let number = 10;
const numer = 20;
```

- Literal which is store in a variable

```js
let x = 10;
```

10 is a literal.

## Using const

- Always use const. Especially when declare array & object.
- If need change value then use let.
- let is a block scope but var is a global scope

```js
{
  let fName = "Arafat";
  let fName; // can't redeclare
} // cannot access fName outside of bracket.

{
  var number = 10;
} // can access number outside of block.
```

## Bigint

```js
// Bigint declaration
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);
```

## Loops

### For loop

```js
for (let i = 0; i < 10; i++) {
  // some code
}
```

- using for loop when know the iteration time.

### While loop

```js
while (condition) {
  //some code
  i++;
}
```

- using while loop when don't know the iteration time.

### do while loop

```js
do {
  // some code
} while (condition);
```

- using when condition is false but the loop work one time.

## break & continue

- break jumps out of loop and continue skip the current iteration.

## String

- good practice to write string <b>tamplate string / template literals</b>

```js
let text = `She's name was something.`;
```

### String methods

```js
let str = `Arafat Hossain`;
```

<table border="1">
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>str.length</td>
        <td>স্ট্রিং এর দৈর্ঘ্য বের করা।</td>
    </tr>
    <tr>
      <td>str.charAt(2)</td>
      <td>নির্দিষ্ট index এর character পাওয়া।</td>
    </tr>
    <tr>
      <td>str.charCodeAt(0)</td>
      <td>ASCII/Unicode value পাওয়া।</td>
    </tr>
    <tr>
      <td>str.slice(2, 5)</td>
      <td>স্ট্রিং থেকে নির্দিষ্ট অংশ কেটে নেওয়া</td>
    </tr>
    <tr>
      <td>str.substring(2, 5)</td>
      <td>slice এর মতো (negative index নেয় না)।</td>
    </tr>
    <tr>
      <td>str.toUpperCase()</td>
      <td>uppercase এ convert করা</td>
    </tr>
    <tr>
      <td>str.toLowerCase()</td>
      <td>lowercase এ convert</td>
    </tr>
    <tr>
      <td>str.trim()</td>
      <td>user input এর unnecessary space রিমুভ করা</td>
    </tr>
    <tr>
      <td>str.trimStart()
          str.trimEnd()</td>
      <td>বিশেষ ক্ষেত্রে leading বা trailing space রিমুভ।</td>
    </tr>
    <tr>
      <td>str.includes("hello")</td>
      <td>কিছু আছে কিনা চেক (search, filtering, validation)।</td>
    </tr>
    <tr>
      <td>str.startsWith("http")</td>
      <td>URL validation, security checks, file type detect ইত্যাদি।</td>
    </tr>
    <tr>
      <td>str.endsWith(".png")</td>
      <td>file validation, extension check।</td>
    </tr>
    <tr>
      <td>str.indexOf("a")</td>
      <td>স্ট্রিং এর ভিতর কোনো substring প্রথম কোথায় আছে।</td>
    </tr>
    <tr>
      <td>str.lastIndexOf("a")</td>
      <td>substring এর শেষ occurrence.</td>
    </tr>
    <tr>
      <td>str.search(/hello/i)</td>
      <td>regex দিয়ে search করার জন্য best।</td>
    </tr>
    <tr>
      <td>str.match(/[0-9]+/g)</td>
      <td>regex match করা — form validation এ খুব ব্যবহার হয়।</td>
    </tr>
    <tr>
      <td>str.replace("hello", "hi")</td>
      <td>search করে replace.</td>
    </tr>
    <tr>
      <td>str.split(",")</td>
      <td>স্ট্রিংকে ভাগ করে অ্যারে বানিয়ে ফেলে</td>
    </tr>
    <tr>
      <td>"*".repeat(5)</td>
      <td>pattern জেনারেশনে useful।</td>
    </tr>
    <tr>
      <td>"5".padStart(2, "0")</td>
      <td>শুরুতে (বাম পাশে) extra character যোগ করে স্ট্রিংকে নির্দিষ্ট দৈর্ঘ্যের বানায়।</td>
    </tr>
    <tr>
      <td>"5".padEnd(4, "*")</td>
      <td>শেষে (ডান পাশে) extra character যোগ করে স্ট্রিংকে নির্দিষ্ট দৈর্ঘ্যের বানায়।</td>
    </tr>
    <tr>
      <td>toString()</td>
      <td>make string of any value.</td>
    </tr>
</table>

- Comparing two JavaScript objects always returns false.

## Function

- function is a reusable block of code that complete a particular task.

### Function Creation
```js
function add(a, b) {
  let sum = a + b;
  return sum;
}
let a = 10,
  b = 10;
let result = add(a, b); // invoked function
```

### Parameters & Arguments

```js
function function_name(parameter, parameter) {
  //code
}
function_name(argument, argument);
```

### Rest Parameter

```js
function sum(...args) {}
```

it can hold many arguments and convert to array. JS can't take any parameter after rest parameter

```js
function addar(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = addar(10, 20);
```

- If we want to hold a function in a variable must be have a return value of those function.

### var function scope

```js
function sayhello() {
  var fname = "arfu";
  consol.log(fname);
}
sayhello();
consol.log(`hello ${fname}`);
```

### Accidental Global Variable

```js
function sayhello() {
  fname = "arfu";
  consol.log(fname);
}
sayhello();
consol.log(`hello ${fname}`); // will work
```

### Anonymous function

```js
function (){
  consol.log("Hello World");
}
```

- There is no name of function, this is called anonymous function. also write it like this->

```js
let print = function () {
  consol.log("Hello World");
};
```

### Function expression

- A function expression is a function assigned in a variable. It's also an anonymous function cause no function name.

```js
let sumation = function (num1, num2) {
  let result = num1 + num2;
  return result;
};

let show = sumation(10, 20);
```

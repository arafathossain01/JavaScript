## Using innerHTML
- element এর ভেতরে HTML tag সহ content সেট করতে
- নতুন HTML element যুক্ত করতে
- ট্যাগসহ লেখা দেখাতে
- structure পরিবর্তন করতে (div, p, span ইত্যাদি)
```js
document.getElementById("demo").innerHTML="<b>Hello kiki</b>";
```
- লিখাকে bold করবে।
## Using innerText
- element এর ভিতরের শুধু visible text সেট করতে
```js
document.getElementById("demo").innerText="<b>Hello kiki</b>"
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
    let fName = 'Arafat';
    let fName // can't redeclare
} // cannot access fName outside of bracket.

{
    var number = 10;
} // can access number outside of block.
``` 

## Bigint
```js
// Bigint declaration
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
```

## Loops
### For loop
```js
for(let i=0; i<10; i++){
    // some code
}
``` 
- using for loop when know the iteration time.
### While loop
```js
while(condition){
    //some code
    i++;
}
```
- using while loop when don't know the iteration time.
### do while loop
```js
do{
    // some code
}
while(condition);
```
- using when condition is false but the loop work one time.

## break & continue
- break jumps out of loop and continue skip the current iteration.
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
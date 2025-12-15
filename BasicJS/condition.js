// if else
let num1 = 15;
let num2 = 10;

if (num1 > num2) {
  let sum = num1 + num2;
  console.log(sum);
} else {
  let sub = num1 - num2;
  console.log(sub);
}

// Switch case
let day;
let date = new Date().getDay();

switch (date) {
  case 0:
    day = "Sunday";
    console.log(day);

    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thurstday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  default:
    day = "Saturday";
    console.log(day);
}

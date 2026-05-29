console.log('hello');

function Greet() {
  alert("Say my name");
}

document.querySelector(".show-alert").addEventListener(
  "click", Greet
);

// little "click" is used for event listeners. don't use onclick or onCLick for eventlisteners. onclick (valid), onCLick (valid react/jsx), click (valid)

let times = 0;

setInterval(() => { // anonymous funcs have the arrow
  // alert(times + 1);
  if (times <= 10) {
    console.log(times++);
  }
  // times++ is the increment step post logging the previous value (i.e starts at 0, 1, 2 etc).
  // ++times is the increment step pre logging the value (i.e starts at 1, 2, 3 etc)
}, 3000); //callbackfunction b4 the time interval;

console.log('7' + 4) // the number will be converted into a string and the result will be '74'
// booleans are much more useful that you think

// **NEW OPERATOR**
// modulo operator (%)
let a = 10;
let b = 5;

console.log(a % b); //the result is 0. modulo is the remainder of the division between 2 numbers. in this case, 10/5 = 2 r 0, 0(zero) is the answer

// **EXPONENTIATION (**)**
console.log(a ** b); // basically 10^5

// += || ++.  similarly *= || **(idk abt ts 1), -= || --, /=;

// i noticed one more difference between for and while loop. in a while loop the round brackets contain only the condition but in a for loop the round brackets contain the declared variable, the condition(comparism), and the increment step all at once, before having the code to run in the curly brakets. e.g

// while loop
let counter = 0; // varisble declared outside the round brackets of the while loop.
while (counter < 10) {
  console.log(counter);
  counter++;
}

// for loop
for (let i = 0; i < 10; i++) { // i declared inside the round bracket, comparism and increment step also in the round brackets
  console.log(i);
}

// for loop is better and counter handlings (counting tasks) because all fit necessaries are in the round brackets.
// while loops is better for counters we don't know when they end, so the code runs until the code fails

// the date() function, give the current date and time
// the tolowercase() func transforms a text all into lowercase

console.log(Date());

/* let's have a function

function addNumber(num1, num2) { here num1 & num2 are called parameters
  ......
};

addNumber(5, 3) 5 and 3 will go to num1 and mum2 respectively, but here, the values are called arguements
*/
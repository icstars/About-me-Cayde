//VARIABLES - container for data to be used for later

//let - are mutable - change
let number = 15;
number = 10;

//const - immutable/cannot change
const name = "Cadin";

//var

var number2 = 0;

number = 10;

//DATA TYPES

// Number/integer
let x = 2;

let y = 2.5;

let z = x + y;

let b = 10000000;

console.log(2 ** 4);
//String - sequence of characters
const name2 = `Good Morning World`;

console.log(name2);
let sentence = "hi";
let sentence2 = "bye";
let sentence3 = sentence + " " + sentence2;

let sentence4 = `Hai watashi no o namae ha Cadin desu ${sentence2}`;
console.log(sentence4);

let o = 200;

let s = `${o}`;

let num = "20,000";

let num2 = 20;

console.log(num + num2);

const num3 = 10;

console.log(num3);

//Booleans

// Truthy - anything with value
//1
//'Great'
//true
//Falsy - undefined; no value
// 0
// ''
//undefined
//null

console.log(Boolean(undefined));

//Template litteral = %{ }

//Arrays - list of data types/ data structure

const array = ["cadin", "will", "romeo", "brianna", "collin", "vue"];
const lastItemTest = array.slice(-1);
const lastItem = lastItemTest.slice(0); //pas by value
console.log(lastItem);

console.log(array[array.length - 1]); // pass by reference
// console.log(array.pop());

const arr = ["el1", "el2", "el3"];

const mathRandom = Math.random();
console.log(mathRandom); // between  0 -1

const mathRandom1 = Math.random() * arr.length;
console.log(mathRandom1);

// console.log(array[Math.floor(Math.random() * array.length)]);
//Math.floor / rounds down
//Math.ceil / rounds up

// For loops
// It repeats a task or code a certain number of times based on a condition
// split() -splits a string by the specified character
// join() - joins array elements between a specific character

let str = "cadin";
console.log(str.split(" "));

console.log("test");
//Traditional loop
//  1. initializer  2.conditition 3.interator
let numb = ["one,", "two,", "three"];
for (let i = 0; i < numb.length; i++) {
  console.log(numb[i]);
}
//for of loop
for (char of array) {
  console.log(char);
}

let string = "cadin";

for (car of string) {
  console.log(car);
}

// while loop
let tho = 0;
// while (tho < 5) {
//   console.log(tho);
//   tho++;
// }
const act = [1, 2, "ly", 4, 5, "cadin"];
let acts = 0;
while (acts != act.length) {
  console.log(act[acts]);
  acts++;
}

//!= not equal

//word = "hey";
//while (arrr.join("") != word) {
// arrr = [];
// for (chark of word) {
// arrr.push(charArray[Math.floor(Math.random() * charArray.length)]);
//}
//console.log(arrr.join(""));
//attempts++;
//}
//console.log(`Number of attempts: ${attempts}`);

//for (let i = 0; i < ack.length; i++) {
//  console.log(ack[i]);
//}

// += asignment opperator / skipping elements

//for let x=0; x < arr.length; x+/-=2~

//Logical Operators
//!= Not equal
//<less
//>more
//<=less or eqaul to
//>= more or equal to

//Loose Equals
// == / wont take data type into account
//Strict Eqauls
// === / will take data type into acount

// true !=! "false" ----> true

//let input = prompt("what is your name");

//console.log(input);

//CONDITIONALS
//allows you to specify different actions based on whether or not a condition is met

let t = "hello world";
console.log(t);

t = `hello icstars`;
let u = "bye";
//sometimes we want to just check if a variable has a value
if (t) {
  console.log("this code block will execute");
} else {
  console.log("this is a false block");
}
if (u) {
  console.log(u === "hi");
}

//    1.condition
//if (iocw)

let ramMun = Math.floor(Math.random() * 3);
console.log(ramMun);

if (ramMun === 0) {
  console.log("zero is your rnd num");
} else if (ramMun === 1) {
  console.log("One is your rdm nmb");
} else if (ramMum === 2) {
  console.log("Two is your rnd nmb");
}

//logical and operator

if ((ramMun === 0) & t) {
  console.log("you got it because both values are troue");
} else {
  console.log("one or both expressions are false");
}

//  || or opperator

//block scope remember curly brackets

debugger;

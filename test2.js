// let button = document.querySelector(`#Hob`);
// let div = document.querySelector(`#Hobi`);

// button.addEventListener("click", function () {
//   div.classList.toggle("hidden");
// });
// console.log(button);

// let button1 = document.querySelector(`#Skilltag`);
// let div1 = document.querySelector(`#Skilldiv`);

// button1.addEventListener("click", function () {
//   div1.classList.toggle("hidden");
// });

// let button2 = document.querySelector(`#Pasttag`);
// let div2 = document.querySelector(`#Pastdiv`);

// button2.addEventListener("click", function () {
//   div2.classList.toggle("hidden");
// });

// let button3 = document.querySelector(`#Asptag`);
// let div3 = document.querySelector(`#Aspdiv`);

// button3.addEventListener("click", function () {
//   div3.classList.toggle("hidden");
// });

// let button4 = document.querySelector(`#Edutag`);
// let div4 = document.querySelector(`#Edudiv`);

// button4.addEventListener("click", function () {
//   div4.classList.toggle("hidden");
// });

// let vendingMachine = (money, item) => {
//   let snacks = ["Pepsi", "Hersheys", "Snickers", "Skittles"];
//   if (money === "$2.00") {
//     for (snack of snacks) {
//       if (item === snack) {
//         return snack;
//       }
//     }
//     return "Doesnt exist";
//   }
// };
// console.log(vendingMachine("$2.00", "Pepsi"));
// let i = "Hello";
// console.log(i);

// //Rock paper Scissors
// let arr = ["Rock", "Paper", "Scissors"];
// let countc = 0;
// let countp = 0;
// let score = `Your score ${countp}, CP score ${countc}`;

// //decision
// let RPS = () => {
//   countc = 0;
//   countp = 0;
//   alert(`Rock Paper Scissors`);
//   while (countc != 3 || countp != 3) {
//     let playerChoice = prompt(`Your choice is`);
//     let cpc = arr[Math.floor(Math.random() * arr.length)];
//     //decisson
//     if (playerChoice === cpc) {
//       alert(`Tie! Try Again`);
//     } else if (
//       (playerChoice === "Rock" && cpc === "Paper") ||
//       (playerChoice === "Paper" && cpc === "Scissor") ||
//       (playerChoice === "Scissors" && cpc === "Rock")
//     ) {
//       alert(`CP chose ${cpc}, you lose`);
//       countc++;
//       score = `Your score ${countp}, CP score ${countc}`;
//       alert(score);
//     } else if (
//       (playerChoice === "Rock" && cpc === "Scissors") ||
//       (playerChoice === "Paper" && cpc === "Rock") ||
//       (playerChoice === "Scissors" && cpc === "Paper")
//     ) {
//       alert(`CP chose ${cpc}, You win`);
//       countp++;
//       score = `Your score ${countp}, CP score ${countc}`;
//       alert(score);
//     }
//     if (countc == 3 || countp == 3) {
//       break;
//     }
//   }
// };
// //here above is test for page

// //Under here is notes
// import "./Hub.js";

// test();
// //debugger;

// //how to iterate through a whole array  A1
// // break will stop a loop

// // let dudes = ["Lucycan", "Collin", "Mark", "Cortez", "Will"];
// // console.log(dudes);

// // for (let j = 0; j < dudes.length; j++) {
// //   console.log(dudes[j]);
// //   if (dudes[j] === "Will") {
// //     console.log(`Hello ${dudes[j]}, How are you :)`);
// //   } else {
// //     console.log(`Hello my name is ${dudes[j]}, How can I help you`);
// //   }
// // }

// //end of  A1

// //Rock paper Scissors
// //Players choice

// // let playerChoice = prompt(`Your choice is`);
// //Commputers choice

// //              1.)peramiters  2.)output
// //fuction call ( )            { }
// //return saves the value

// //declaring a function  "function name () {}"  // let name = function () {} // let name = () => {}=arrow function

// // function loopArray(nums) {
// //   for (char of nums) {
// //     console.log(char);
// //   }
// // }
// // let nums = [1, 2, 3, 4];

// // //vending macchine
// // let startGame = () => {
// //   countc = 0;
// //   countp = 0;
// //   while (countc != 3 || countp != 3) {
// //     const x = pChoice();
// //     const y = cChoice();
// //     decision(x, y);
// //     if (countc == 3 || countp == 3) {
// //       break;
// //     }
// //   }
// // };

// // let pChoice = () => {
// //   let player = prompt(`your choice is`);
// //   console.log(player);
// //   return player;
// // };

// // let cChoice = () => {
// //   let cPc = arr[Math.floor(Math.random() * arr.length)];
// //   console.log(cPc);
// //   return cPc;
// // };

// // let decision = (x, y) => {
// //   if (x === y) {
// //     alert(`Tie! Try Again`);
// //   } else if (
// //     (x === "Rock" && y === "Paper") ||
// //     (x === "Paper" && y === "Scissor") ||
// //     (x === "Scissors" && y === "Rock")
// //   ) {
// //     alert(`CP chose ${y}, you lose`);
// //     countc++;
// //     score = `Your score ${countp}, CP score ${countc}`;
// //     alert(score);
// //   } else if (
// //     (x === "Rock" && y === "Scissors") ||
// //     (x === "Paper" && y === "Rock") ||
// //     (x === "Scissors" && y === "Paper")
// //   ) {
// //     alert(`CP chose ${y}, You win`);
// //     countp++;
// //     score = `Your score ${countp}, CP score ${countc}`;
// //     alert(score);
// //   }
// // };

// Tic Tac Toe

let board = [" ", " ", " "];

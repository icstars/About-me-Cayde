//Imports
import { decision } from "./RPCDC.js";
import { pChoice } from "./RPC PL.js";
import { cChoice } from "./RPC CC.js";
//End of Imports
// Buttons for Pages
let button = document.querySelector(`#Hob`);
let div = document.querySelector(`#Hobi`);

button.addEventListener("click", function () {
  div.classList.toggle("hidden");
});

let button1 = document.querySelector(`#Skilltag`);
let div1 = document.querySelector(`#Skilldiv`);

button1.addEventListener("click", function () {
  div1.classList.toggle("hidden");
});

let button2 = document.querySelector(`#Pasttag`);
let div2 = document.querySelector(`#Pastdiv`);

button2.addEventListener("click", function () {
  div2.classList.toggle("hidden");
});

let button3 = document.querySelector(`#Asptag`);
let div3 = document.querySelector(`#Aspdiv`);

button3.addEventListener("click", function () {
  div3.classList.toggle("hidden");
});

let button4 = document.querySelector(`#Edutag`);
let div4 = document.querySelector(`#Edudiv`);

button4.addEventListener("click", function () {
  div4.classList.toggle("hidden");
});
// End of Tab Buttons

// Rock paper Scissors
let score = "";
let buttonr = document.querySelector(`#RPCB`);
let arr = ["Rock", "Paper", "Scissors"];
let countc = 0;
let countp = 0;

let startGame = () => {
  countc = 0;
  countp = 0;
  while (countc != 3 && countp != 3) {
    console.log(countc);
    console.log(countp);
    const x = pChoice();
    const y = cChoice(arr);
    if (decision(x, y) === "tie") {
      alert(`CP chose ${y}, You tied`);
    } else if (decision(x, y) === "lose") {
      countc++;
      alert(`CP Chose ${y}, You Lose`);
      score = `Your score ${countp}, CP score ${countc}`;
      alert(score);
    } else if (decision(x, y) === "win") {
      countp++;
      alert(`CP chose ${y}, You win`);
      score = `Your score ${countp}, CP score ${countc}`;
      alert(score);
    }
    if (countc === 3 || countp === 3) {
      break;
    }
  }
};

buttonr.addEventListener("click", startGame);
// End Rock Paper Scissors

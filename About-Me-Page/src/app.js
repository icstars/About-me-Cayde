//Imports
import { decision } from "./RPCDC.js";
import { pChoice } from "./RPC PL.js";
import { cChoice } from "./RPC CC.js";
import { Battle } from "./Battleship.js";
import { GGames } from "./GuessingGame.js";
//End of Imports
// Buttons for Pages

let buttong = document.querySelector(`#GGame`);
buttong.addEventListener("click", GGames);

let buttonb = document.querySelector(`#BattleS`);
buttonb.addEventListener("click", Battle);

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

let button5 = document.querySelector(`#gtag`);
let div5 = document.querySelector(`#gamu`);

button5.addEventListener("click", function () {
  div5.classList.toggle("hidden");
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

//Star BattleShip
Battle;
//end Battleship

//HW Stuff

const grabFirstName = document.getElementById("firstNameInput");
console.log(grabFirstName);

const grablastName = document.getElementById("lastNameInput");
console.log(grablastName);

const grabdateinput = document.getElementById("dateInput");
console.log(grabdateinput);

const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);

let infoarr = [];

grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("HIT IT HARDER");
  console.log(grabFirstName.value);
  console.log(grablastName.value);
  console.log(grabdateinput.value);

  //when we click the like button the paragraph will appear
  // Thank Should've hit it sooner
  const paragraphElement = document.querySelector("#para");
  console.log(
    `${grabFirstName.value} ${grablastName.value} your birthdate is ${grabdateinput.value}. Thank you for Hitting the like button`
  );
  infoarr.push(
    `,  ${grabFirstName.value} ${grablastName.value} your birthdate is ${grabdateinput.value}.`
  );
  paragraphElement.textContent = infoarr;

  grabFirstName.value = "";
  grablastName.value = "";
  grabdateinput.value = "";
});

//more hw

// const grabForm = document.querySelector("form");

// grabForm.addEventListener("submit", (e) => {
//   e.preventDefault;
//   console.log("message");
//   const formData = new formData(grabForm);
//   console.log(formData);

//   const firstName = formData.get("firstName");
//   console.log(firstName);

//   const lastName = formData.get("lastName");
//   console.log(lastName);

//   const birthday = formData.get("birthday");
//   console.log(birthday);

//   formData.forEach((item) => {
//     console.log(item);
//   });
// });

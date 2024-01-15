const userChoice = document.querySelector("select"); //We use dom manipulation to gran each element we need
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const pResult = document.querySelector("#pResult");
const cResult = document.querySelector("#cResult");
const result = document.querySelector("#Result");
const submit = document.querySelector("#Submit");

let userPoints = 0;
let cpuPoints = 0;
let choices = ["Rock", "Paper", "Scissors"];
submit.addEventListener("click", () => {
  let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(cpuChoice);
  console.log("oi");
  if (userChoice.value === cpuChoice) {
    //innerHTML connects to an element and aloows us to read or edit its value
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU ${cpuPoints}`;
    pResult.innerHTML = `Player: ${userPoints}`;
    cResult.innerHTML = `CPU: ${cpuPoints}`;
    result.innerHTML = `TIE`;
  } else if (
    (userChoice.value === "Rock" && cpuChoice === "Paper") ||
    (userChoice.value === "Paper" && cpuChoice === "Scissor") ||
    (userChoice.value === "Scissors" && cpuChoice === "Rock")
  ) {
    cpuPoints++;
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU ${cpuPoints}`;
    pResult.innerHTML = `Player: ${userPoints}`;
    cResult.innerHTML = `CPU: ${cpuPoints}`;
    result.innerHTML = `CPU Chose ${cpuChoice}, You lost`;
  } else if (
    (userChoice.value === "Rock" && cpuChoice === "Scissors") ||
    (userChoice.value === "Paper" && cpuChoice === "Rock") ||
    (userChoice.value === "Scissors" && cpuChoice === "Paper")
  ) {
    userPoints++;
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU ${cpuPoints}`;
    pResult.innerHTML = `Player: ${userPoints}`;
    cResult.innerHTML = `CPU: ${cpuPoints}`;
    result.innerHTML = `CPU Chose ${cpuChoice}, You won`;
  }
  if (userPoints === 3) {
    result.innerHTML = ` Player wins the game`;
    cpuPoints = 0;
    userPoints = 0;
  } else if (cpuPoints === 3) {
    result.innerHTML = `CPU wins the game`;
    cpuPoints = 0;
    userPoints = 0;
  }
});

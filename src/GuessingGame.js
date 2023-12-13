let buttong = document.querySelector(`#GGame`);
let GGames = () => {
  let attempts = () => {
    let i = 1;
    let answer = Math.floor(Math.random() * 100);
    console.log(answer);
    alert(`Guess a number between 1-100`);
    while (i < 7) {
      let guess = prompt(`Attempt ${i}`);
      if (guess == answer) {
        alert("success");
        break;
      } else if (guess < answer) {
        alert(`The NUMBER is higher than what you guessed try again`);
        i++;
      } else if (guess > answer) {
        alert(`the GUESS was higher than the number`);
        i++;
      }
      if (i == 7) {
        alert("You Failed");
        break;
      }
    }
  };
  let playAgain = () => {
    let choice = prompt(`would you like to play again y/n`);
    if (choice == "y") {
      return true;
    } else if (choice == "n") {
      return false;
    }
  };

  let guessingGame = () => {
    attempts();
    if (playAgain() == true) {
      guessingGame();
    } else {
      alert("thanks for playing");
    }
  };

  guessingGame();
};
buttong.addEventListener("click", GGames());

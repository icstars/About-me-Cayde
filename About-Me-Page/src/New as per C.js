// let arr = [
//   [1, 2, 3],
//   ["Watashino", "col"],
//   [true, false, true],
// ];

// let x = 0;
// //typeof checks for data type
// for (let i = 0; i < arr.length; i++) {
//   // for each array in the main array
//   for (let j = 0; j < arr[i].length; j++) {
//     // for each element in the array in the main array
//     if (typeof arr[i][j] == "string" && j == 0) {
//       // if that element is a string
//       for (char of arr[i][j]) {
//         // log each character in that element
//         console.log(char);
//       }
//     }
//   }
// }

//  new part

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < arr[i+1]) {
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//     }
//}

// let arr = [1, 0, 7, 3, 65, 23];

// for (let i = 0; i < arr.length; i++) {
//   //iterating through the array
//   for (let j = 0; j < arr.length; j++) {
//     //iterating trought the array each time i increases by 1
//     if (arr[j] > arr[j + 1]) {
//       //if the element at position j is more than the next element
//       let temp = arr[j]; // temp equals arr[j]
//       arr[j] = arr[j + 1]; // arr[j] now equals the next element
//       arr[j + 1] = temp; // and the next element eqauls temp (which was the first )
//     }
//   }
// }

// let two = (a, b) => {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       let temp = a[i] + a[j];
//       if (temp == b) {
//         return [a[i], a[j]];
//       }
//     }
//   }
//   return `No number equals the target`;
// };

// console.log(two([10, -1, 3, 4, 2, 5, 6], 3));

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

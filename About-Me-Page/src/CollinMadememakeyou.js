let board = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let threeInARow = (a, b, c) => {
  if (a != 0 && a == b && (a == c) & (b == c)) {
    return true;
  } else {
    return false;
  }
};

let checkWinner = (board) => {
  //right
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (
        threeInARow(
          board[row][column],
          board[row][column + 1],
          board[row][column + 2]
        )
      ) {
        return "three in a row";
      }
    }
  }
};
// up and down
for (let row = 0; row < 1; row++) {
  for (let column = 0; column < 3; column++) {
    if (
      threeInARow(
        board[row][column],
        board[row + 1][column],
        board[row + 2][column]
      )
    ) {
      return "three in a row";
    }
  }
}
//diag right
for (let row = 0; row < 1; row++) {
  for (let column = 0; column < 3; column++) {
    if (
      threeInARow(
        board[row][column],
        board[row + 1][column + 1],
        board[row + 2][column + 2]
      )
    ) {
      return "three in a row";
    }
  }
}
//diag left
for (let row = 0; row < 1; row++) {
  for (let column = 0; column < 3; column++) {
    if (
      threeInARow(
        board[row][column],
        board[row + 1][(column = 1)],
        board[row + 2][column - 2]
      )
    ) {
      return "three in a row";
    }
  }
}

console.log(checkWinner(board));

const b1 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const b2 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
];

let u1Row = prompt("please select your row");
let u1Column = prompt("please select column");
let u1Score = 0;

while (u1Score < 2) {
  if (b2[u1Row][u1Column] == 1) {
    alert("hit!");
    b2[u1Row][u1Column] = 0;
    u1Score++;
  } else {
    alert("miss");
  }

  alert(`Current score ${u1Score}`);

  if (u1Score >= 2) {
    alert(`User 1 wins`);
    break;
  }
}

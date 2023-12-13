let decision = (x, y) => {
  if (x === y) {
    return "tie";
  } else if (
    (x === "Rock" && y === "Paper") ||
    (x === "Paper" && y === "Scissor") ||
    (x === "Scissors" && y === "Rock")
  ) {
    return "lose";
  } else if (
    (x === "Rock" && y === "Scissors") ||
    (x === "Paper" && y === "Rock") ||
    (x === "Scissors" && y === "Paper")
  ) {
    return "win";
  }
};

export { decision };

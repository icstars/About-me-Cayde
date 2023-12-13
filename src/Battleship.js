let buttonb = document.querySelector(`#BattleS`);
let Battle = () => {
  //initialize variables
  alert("This game is played in the console press f12");
  let myGridSize = prompt("What size would you like your grid to be");
  let enemyGridSize = prompt("What size would you like the CP grid to be");
  let myShips = 3;
  let cpShips = 3;
  let enemyLocations = {};
  let drawBreak = () => {
    //seperates game fields
    console.log("---------------------");
  };

  let createGrid = (size) => {
    let grid = [];
    for (let i = 0; i < size; i++) {
      grid[i] = [];
      for (let j = 0; j < size; j++) {
        grid[i][j] = "-";
      }
    }
    return grid;
  };

  let printGrid = (grid, isCP = false) => {
    const headers = createHeaders(grid.length);
    console.log(headers);
    for (let i = 0; i < grid.length; i++) {
      let rowStr = i + " ";
      for (let cell of grid[i]) {
        if (isCP && cell == "O") {
          rowStr += "- ";
        } else {
          rowStr += cell + " ";
        }
      }
      console.log(rowStr);
    }
  };

  let createHeaders = (size) => {
    let result = " ";
    for (let i = 0; i < size; i++) {
      result += i + " ";
    }
    return result;
  };

  //place random
  let placeCharacter = (x, y, c, grid) => {
    grid[y][x] = c;
  };

  let randomNum = (max) => {
    //makes random placement for enemy ship
    return Math.floor(Math.random() * Math.floor(max));
  };

  let placeRandomCharacter = (c, grid, max) => {
    let didPlace = false; // boolean to prevent overlapping ships
    while (!didPlace) {
      let x = randomNum(max);
      let y = randomNum(max);
      if (!enemyLocations[`${x}-${y}`]) {
        // Checks for placement
        placeCharacter(x, y, c, grid);
        didPlace = true;
      }
    }
  };

  let myGrid = createGrid(myGridSize);
  let enemyGrid = createGrid(enemyGridSize);

  printGrid(enemyGrid, true);
  printGrid(myGrid);

  for (let i = 1; i < 4; i++) {
    let x = prompt("Enter the x coordinate for your ship number " + i);
    let y = prompt("Enter the y coordinate for your ship number " + i);
    placeCharacter(x, y, "O", myGrid);
    placeRandomCharacter("O", enemyGrid, enemyGridSize);
    drawBreak();
    printGrid(enemyGrid, true);
    printGrid(myGrid);
  }

  let attack = (x, y, grid) => {
    if (grid[y][x] == "O") {
      grid[y][x] = "!";
      return true;
    } else if (grid[y][x] == "-") {
      grid[y][x] = "x";
      return false;
    } else {
      return false;
    }
  };

  //game loop
  while (cpShips > 0 && myShips > 0) {
    let x = prompt("Enter the x coordinate for your attack");
    let y = prompt("Enter the y coordinate for your attack");
    console.clear();

    if (attack(x, y, enemyGrid)) {
      cpShips--;
    }

    x = randomNum(myGridSize);
    y = randomNum(myGridSize);
    if (cpShips > 0 && attack(x, y, myGrid)) {
      myShips--;
    }

    drawBreak();
    printGrid(enemyGrid, true);
    printGrid(myGrid);
  }

  if (myShips < cpShips) {
    console.log("Loser");
  } else {
    console.log("Victor");
  }
};

buttonb.addEventListener("click", Battle);

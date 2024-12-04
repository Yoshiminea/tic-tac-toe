let playerNum = 1;
let arr = [];
let occupiedCell = 0;
let cellChosen;
let rows = 3;
let columns = 3;
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = 0;
  }
}
function Player() {
  let occupiedCell = 0;
  //current player
  function currentPlayer() {
    return playerNum;
  }
  //change player
  function changePlayer() {
    playerNum == 1 ? (playerNum = 2) : (playerNum = 1);
  }

  function showCurrentPlayer() {
    console.log(playerNum);
  }
  function refresh() {
    playerNum = 1;
  }
  return { currentPlayer, changePlayer, showCurrentPlayer, refresh };
}

function Board() {
  function showBoard() {
    for (let i = 0; i < rows; i++) {
      console.log(" ");
      for (let j = 0; j < columns; j++) {
        console.log(arr[i][j]);
      }
    }
  }

  function checkDraw() {
    if (occupiedCell == 9) {
      debugger;
      console.log("Draw!");
      return true;
    } else {
      return false;
    }
  }

  function chooseCell(player, row, column) {
    if (arr[row][column] == 0) {
      arr[row][column] = player;
      occupiedCell++;
      checkDraw();
      cellChose = false;
    } else {
      cellChose = true;
    }
  }
  function checkBoard(player) {
    //check row

    console.log("checkBoard");
    for (let i = 0; i < rows; i++) {
      //   for (let j = 0; j < columns; j++) {
      //   }
      if (arr[i].every((cell) => cell == player)) {
        console.log("you won!");
        return true;
      }
    }
    //check diagonal

    if (arr[0][0] == player) {
      if (arr[1][1] == player) {
        if (arr[2][2] == player) {
          console.log("you won!");
          return true;
        }
      }
    }
    if (arr[0][2] == player) {
      if (arr[1][1] == player) {
        if (arr[2][0] == player) {
          console.log("you won!");
          return true;
        }
      }
    }

    //Check column
    if (arr[0][0] == player) {
      if (arr[1][0] == player) {
        if (arr[2][0] == player) {
          console.log("you won!");
          return true;
        }
      }
    }
    if (arr[0][1] == player) {
      if (arr[1][1] == player) {
        if (arr[2][1] == player) {
          console.log("you won!");
          return true;
        }
      }
    }
    if (arr[0][2] == player) {
      if (arr[1][2] == player) {
        if (arr[2][2] == player) {
          console.log("you won!");
          return true;
        }
      }
      gi;
    }
    return false;
  }
  function refresh() {
    occupiedCell = 0;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = 0;
      }
    }
  }
  return { showBoard, chooseCell, checkBoard, checkDraw, cellChosen, refresh };
}

function Ui() {
  const one = document.querySelector("#cell-one");
  const two = document.querySelector("#cell-two");
  const three = document.querySelector("#cell-three");
  const four = document.querySelector("#cell-four");
  const five = document.querySelector("#cell-five");
  const six = document.querySelector("#cell-six");
  const seven = document.querySelector("#cell-seven");
  const eight = document.querySelector("#cell-eight");
  const nine = document.querySelector("#cell-nine");

  const restartButton = document.querySelector(".restart");
  restartButton.addEventListener("click", () => {
    const display = Display();
    display.refresh();
    const board = Board();
    board.refresh();
    const player = Player();
    player.refresh();
  });

  function clickHandler() {
    one.addEventListener("click", () => {
      console.log("one");
      gameRun(0, 0);
    });
    two.addEventListener("click", () => {
      console.log("one");
      gameRun(0, 1);
    });
    three.addEventListener("click", () => {
      console.log("one");
      gameRun(0, 2);
    });
    four.addEventListener("click", () => {
      console.log("one");
      gameRun(1, 0);
    });
    five.addEventListener("click", () => {
      console.log("one");
      gameRun(1, 1);
    });
    six.addEventListener("click", () => {
      console.log("one");
      gameRun(1, 2);
    });
    seven.addEventListener("click", () => {
      console.log("one");
      gameRun(2, 0);
    });
    eight.addEventListener("click", () => {
      console.log("one");
      gameRun(2, 1);
    });
    nine.addEventListener("click", () => {
      console.log("one");
      gameRun(2, 2);
    });
  }

  clickHandler();
}

function Display() {
  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const three = document.querySelector("#three");
  const four = document.querySelector("#four");
  const five = document.querySelector("#five");
  const seven = document.querySelector("#seven");
  const eight = document.querySelector("#eight");
  const nine = document.querySelector("#nine");
  const resultContainer = document.querySelector(".result");
  function circleOrCross(cellNum) {
    if (playerNum == 1) {
      cellNum.classList.add("circle");
    } else {
      cellNum.classList.add("cross");
    }
  }

  function refresh() {
    one.classList.remove("circle", "cross");
    two.classList.remove("circle", "cross");
    three.classList.remove("circle", "cross");
    four.classList.remove("circle", "cross");
    five.classList.remove("circle", "cross");
    six.classList.remove("circle", "cross");
    seven.classList.remove("circle", "cross");
    eight.classList.remove("circle", "cross");
    nine.classList.remove("circle", "cross");
    resultContainer.textContent = "";
  }
  function showDraw() {
    resultContainer.textContent = "Draw!";
  }

  function updateCell(cell) {
    switch (cell) {
      case 0:
        circleOrCross(one);
        break;
      case 1:
        circleOrCross(two);
        break;
      case 2:
        circleOrCross(three);
        break;
      case 3:
        circleOrCross(four);
        break;
      case 4:
        circleOrCross(five);
        break;
      case 5:
        circleOrCross(six);
        break;
      case 6:
        circleOrCross(seven);
        break;
      case 7:
        circleOrCross(eight);
        break;
      case 8:
        circleOrCross(nine);
        break;
    }
  }

  function showResult() {
    resultContainer.textContent = `Player ${playerNum} Won!`;
  }
  return { updateCell, refresh, showResult, showDraw };
}

function gameRun(row, column) {
  const board = Board();
  const player = Player();
  const display = Display();
  function checkWon() {
    let won = board.checkBoard(playerNum);
    return won;
  }
  function checkDraw() {
    let draw = board.checkDraw();
    return draw;
  }

  function updateCell() {
    if (row == 0 && column == 0) {
      display.updateCell(0);
    } else if (row == 0 && column == 1) {
      display.updateCell(1);
    } else if (row == 0 && column == 2) {
      display.updateCell(2);
    } else if (row == 1 && column == 0) {
      display.updateCell(3);
    } else if (row == 1 && column == 1) {
      display.updateCell(4);
    } else if (row == 1 && column == 2) {
      display.updateCell(5);
    } else if (row == 2 && column == 0) {
      display.updateCell(6);
    } else if (row == 2 && column == 1) {
      display.updateCell(7);
    } else if (row == 2 && column == 2) {
      display.updateCell(8);
    }
  }
  board.chooseCell(player.currentPlayer(), row, column);
  updateCell();

  if (checkDraw()) {
    console.log("Draw");
    display.showDraw();
  }
  if (checkWon()) {
    display.showResult();
    console.log("Won");
  }
  player.changePlayer();

  console.log("End Run");
}

Ui();

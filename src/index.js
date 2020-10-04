import "./styles.css";

// array of keeping track of game data
function createBoard(size) {
  let board = [];
  for (let i = 1; i <= size * size + 1; i++) {
    board.push("");
  }
  return board;
}

// html table for gameboard
function createTable(table, board) {
  let counter = 0;
  for (let i = 1; i <= 5; i++) {
    let row = document.createElement("tr");
    row.setAttribute("id", "row-" + i);
    for (let j = 1; j <= 5; j++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", counter);
      let content = document.createTextNode(board[counter]);
      cell.appendChild(content);
      cell.addEventListener("click", clickHandler, false);
      row.appendChild(cell);
      counter++;
    }
    table.appendChild(row);
  }
}

// update the board array and draw player moves
function clickHandler() {
  let x = this.id;
  if (board[x] === "" && turn === 0) {
    board[x] = "x";
    this.setAttribute("id", "p1");
    isOver("x");
    progress++;
    updateProgress(progress);
    turn++;
  } else if (board[x] === "" && turn === 1) {
    board[x] = "o";
    this.setAttribute("id", "p2");
    isOver("o");
    progress++;
    updateProgress(progress);
    turn = turn - 1;
  }
}

// check if game is over after each turn
function isOver(mark) {
  let pNum = turn + 1;
  if (checkHorizontal(board, mark)) {
    alert("Player " + pNum + " won!");
  } else if (checkVertical(board, mark)) {
    alert("Player " + pNum + " won!");
  } else if (checkDiagonal(board, mark)) {
    alert("Player " + pNum + " won!");
  }
}

// Win condition checks
function checkHorizontal(board, mark) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[0] === mark &&
      board[1] === mark &&
      board[2] === mark &&
      board[3] === mark &&
      board[4] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[5] === mark &&
      board[6] === mark &&
      board[7] === mark &&
      board[8] === mark &&
      board[9] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[10] === mark &&
      board[11] === mark &&
      board[12] === mark &&
      board[13] === mark &&
      board[14] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[15] === mark &&
      board[16] === mark &&
      board[17] === mark &&
      board[18] === mark &&
      board[19] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[20] === mark &&
      board[21] === mark &&
      board[22] === mark &&
      board[23] === mark &&
      board[24] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    }
  }
}

function checkVertical(board, mark) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[0] === mark &&
      board[5] === mark &&
      board[10] === mark &&
      board[15] === mark &&
      board[20] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[1] === mark &&
      board[6] === mark &&
      board[11] === mark &&
      board[16] === mark &&
      board[21] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[2] === mark &&
      board[7] === mark &&
      board[12] === mark &&
      board[17] === mark &&
      board[22] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[3] === mark &&
      board[8] === mark &&
      board[13] === mark &&
      board[18] === mark &&
      board[23] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[4] === mark &&
      board[9] === mark &&
      board[14] === mark &&
      board[19] === mark &&
      board[24] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    }
  }
}

function checkDiagonal(board, mark) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[0] === mark &&
      board[6] === mark &&
      board[12] === mark &&
      board[18] === mark &&
      board[24] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    } else if (
      board[4] === mark &&
      board[8] === mark &&
      board[12] === mark &&
      board[16] === mark &&
      board[20] === mark
    ) {
      // remove event listeners so the game stops once someone wins
      let clickables = document.getElementsByTagName("td");
      for (let i = 0; i < clickables.length; i++) {
        clickables[i].removeEventListener("click", clickHandler, false);
      }
      return true;
    }
  }
}

function updateProgress(progress) {
  let progBar = document.getElementById("filled");
  let calculated = `${(progress / 25) * 100}%`;
  progBar.style["width"] = calculated;
}

// variables for keeping track of turns and gameboard
let turn = 0;
let progress = 0;
let board = createBoard(5);

// draw the playing area
document.getElementById("app").innerHTML = `
<div id="board">

</div>
<div id="progress-bar" style="border:1px solid black; width:330px">
  <div id="filled"></div>
</div>
`;
document.getElementById("board").innerHTML = `<table></table>`;
let table = document.getElementsByTagName("table");
createTable(table[0], board);

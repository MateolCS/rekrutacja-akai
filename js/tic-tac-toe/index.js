let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

console.log("Symbols ", symbols);

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const resetButton = document.querySelector(".reset");

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);
  console.log("Tiles ", tiles);
  console.log("Symbols ", symbols);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const playerInfo = document.querySelector(".turn");
  playerInfo.innerText = `Player ${turn} turn`;
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombinations.forEach((combination) => {
    if (
      symbols[combination[0] % 3][Math.floor(combination[0] / 3)] ===
        symbols[combination[1] % 3][Math.floor(combination[1] / 3)] &&
      symbols[combination[1] % 3][Math.floor(combination[1] / 3)] ===
        symbols[combination[2] % 3][Math.floor(combination[2] / 3)] &&
      symbols[combination[0] % 3][Math.floor(combination[0] / 3)] !== ""
    ) {
      alert(`Player ${turn} won!`);
      return;
    }
  });
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  turn = "x";
  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  tiles.forEach((tile) => {
    tile.classList.remove("tile-x", "tile-o");
  });
}

resetButton.addEventListener("click", reset);

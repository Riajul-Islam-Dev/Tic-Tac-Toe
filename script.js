let currentPlayer = "X";
let gameBoard = Array(9).fill("");
let gameActive = true;

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

function makeMove(cellIndex) {
  if (gameBoard[cellIndex] === "" && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].textContent =
      currentPlayer;
    if (checkWin(currentPlayer)) {
      endGame(false);
    } else if (!gameBoard.includes("")) {
      endGame(true);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById(
        "message"
      ).textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => gameBoard[index] === player);
  });
}

function endGame(draw) {
  gameActive = false;
  document.getElementById("message").textContent = draw
    ? "It's a draw!"
    : `Player ${currentPlayer} wins!`;
}

function resetBoard() {
  gameBoard = Array(9).fill("");
  gameActive = true;
  currentPlayer = "X";
  document.getElementById(
    "message"
  ).textContent = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "#000";
  });
}

document.getElementById(
  "message"
).textContent = `Player ${currentPlayer}'s turn`;

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const container = document.querySelector(".container");
const darkModeLabel = document.querySelector('label[for="darkModeToggle"]');

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    container.classList.remove("bg-info");
    container.classList.add("bg-secondary");
    darkModeLabel.textContent = "Light Mode"; // Update label text
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    container.classList.remove("bg-secondary");
    container.classList.add("bg-info");
    darkModeLabel.textContent = "Dark Mode"; // Update label text
  }
});

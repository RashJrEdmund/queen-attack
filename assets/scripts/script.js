import { createChessBoard, isStrikeable } from "./utils.js"; // FUNCTION TO CREATE CHESS  BOARD

const chessBoard = document.getElementById("chess-board");
const boardSize = 64;
let choosenQueens = [];

(() => createChessBoard(boardSize, chessBoard))(); // ANONYMOUS FUNCTION THAT CALLS createChessBoard()

const squares = document.querySelectorAll(".board-square");
const errorSuccessTag = document.getElementsByTagName("p")[0];
const checkAttackBtn = document.getElementById("check-attack");
const resetBtn = document.getElementById("reset-btn");

squares.forEach((square) =>
  square.addEventListener("click", ({ target }) => {
    const { id } = target;
    errorSuccessTag.innerHTML = "";

    if (choosenQueens.length >= 2)
      return (errorSuccessTag.innerHTML = "cannot select more than 1 queens");

    if (choosenQueens.length < 1) {
      // means this is our firts queen
      target.classList.add("queen_1");
    } else {
      target.classList.add("queen_2");
    }

    choosenQueens.push(id);
    console.log("choosenQueens", choosenQueens);
  })
);

const resetGame = () => {
  choosenQueens.forEach((id) => {
    document.getElementById(id).classList.remove("queen_1");
    document.getElementById(id).classList.remove("queen_2");
  });

  errorSuccessTag.innerHTML = "";
  choosenQueens = [];
};

resetBtn.addEventListener("click", resetGame);

checkAttackBtn.addEventListener("click", () => {
  const attack = isStrikeable();
  if (attack) {
    errorSuccessTag.classList.add("success");
    errorSuccessTag.innerHTML = "queen 1 can attack queen 2";
  }
});

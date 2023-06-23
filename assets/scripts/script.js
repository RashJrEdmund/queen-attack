import { createChessBoard } from "./utils.js"; // FUNCTION TO CREATE CHESS  BOARD

const chessBoard = document.getElementById("chess-board");
const boardSize = 64;
let chossenQueens = [];

(() => createChessBoard(boardSize, chessBoard))(); // ANONYMOUS FUNCTION THAT CALLS createChessBoard()

const squares = document.querySelectorAll(".board-square");
const errorTag = document.getElementsByTagName("p")[0];
const checkAttack = document.getElementById("check-attack");
const resetBtn = document.getElementById("reset-btn");

squares.forEach((square) =>
  square.addEventListener("click", ({ target }) => {
    const { id } = target;
    errorTag.innerHTML = "";

    if (chossenQueens.length >= 2)
      return (errorTag.innerHTML = "cannot select more than 1 queens");

    if (chossenQueens.length < 1) {
      // means this is our firts queen
      target.classList.add("queen_1");
    } else {
      target.classList.add("queen_2");
    }

    chossenQueens.push(id);
    console.log("chossenQueens", chossenQueens);
  })
);

const resetGame = () => {
  chossenQueens.forEach((id) => {
    document.getElementById(id).classList.remove("queen_1");
    document.getElementById(id).classList.remove("queen_2");
  });

  errorTag.innerHTML = "";
  chossenQueens = [];
};

resetBtn.addEventListener("click", resetGame);

export const createChessBoard = (size, chessBoard) => {
  const rowBycol = Math.floor(Math.sqrt(size));
  let idTracker = 0;

  for (let i = 0; i < rowBycol; i++) {
    for (let j = 0; j < rowBycol; j++) {
      const boardSquare = document.createElement("button");
      boardSquare.className = "board-square";
      boardSquare.type = "button";

      if ((i + j) % 2 === 0) boardSquare.classList.add("dark");
      boardSquare.id = idTracker += 1;
      chessBoard.appendChild(boardSquare);
    }
  }
};

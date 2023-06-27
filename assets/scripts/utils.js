export const createChessBoard = (size, chessBoard) => {
  const rowBycol = Math.floor(Math.sqrt(size))
  let idTracker = 11 // button id's should start from 11
  const exceptions = [
    9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90, 99,
    100
  ]

  for (let i = 0; i < rowBycol; i++) {
    for (let j = 0; j < rowBycol; j++) {
      const boardSquare = document.createElement('button')
      boardSquare.className = 'board-square'
      boardSquare.type = 'button'

      chessBoard.appendChild(boardSquare)

      if ((i + j) % 2 === 0) boardSquare.classList.add('dark')
      if (exceptions.includes(idTracker)) {
        if (idTracker % 10 === 0) idTracker += 1
        else idTracker += 2
      }

      boardSquare.id = idTracker
      idTracker += 1
    }
  }
}

export const isStrikeable = (choosenQueens, errorSuccessTag) => {
  if (choosenQueens.length !== 2) {
    return {
      isValid: false,
      message: 'You have to pick any two queens from the board'
    }
  }

  errorSuccessTag.innerHTML = ''

  const queen1 = choosenQueens[0]
  const queen2 = choosenQueens[1]

  const cell11 = queen1.split('', queen1)[0]
  const cell12 = queen1.split('', queen1)[1]

  const cell21 = queen2.split('', queen2)[0]
  const cell22 = queen2.split('', queen2)[1]

  const postitiveObj = {
    isValid: true,
    message: 'queen 1 can take down queen 2'
  }

  // horizontal check
  if (cell11 === cell21) {
    return postitiveObj
  }

  // vertical check
  if (cell12 === cell22) {
    return postitiveObj
  }

  // diagonal left to right
  if (cell11 - cell12 === cell21 - cell22) {
    return postitiveObj
  }

  const positionRightLeft = Math.abs(parseInt(queen1) - parseInt(queen2))

  const moduleRightLeft = positionRightLeft % 9 === 0

  if (moduleRightLeft) {
    return postitiveObj
  }

  return {
    isValid: false,
    message: 'Missed, can not attack this queen'
  }
}

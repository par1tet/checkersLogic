import { Board } from "./entities/classes/Board.ts"

const board = new Board()

board.createField()
board.showField()
board.addMove("24:20")
board.showMoves()
board.showField()

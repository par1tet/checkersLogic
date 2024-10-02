(() => {
  // entities/classes/Board.ts
  var Board = class {
    field = [[]];
    movesList = [];
    constructor() {
    }
    parseMove(move) {
      let splitedMove = (() => {
        const splitByLine = move.split("-");
        if (splitByLine[0] === move) {
          return move.split(":");
        }
        return splitByLine;
      })();
      splitedMove = splitedMove.map((move2) => [Math.floor(+move2 * 2 / this.field[0].length) - 1, +move2 * 2 % (this.field[0].length - 1)]);
      return splitedMove;
    }
    createField() {
      this.field = [
        [" ", "b", " ", "b", " ", "b", " ", "b"],
        ["b", " ", "b", " ", "b", " ", "b", " "],
        [" ", "b", " ", "b", " ", "b", " ", "b"],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        ["w", " ", "w", " ", "w", " ", "w", " "],
        [" ", "w", " ", "w", " ", "w", " ", "w"],
        ["w", " ", "w", " ", "w", " ", "w", " "]
      ];
    }
    showField() {
      const copyField = Object.assign(this.field);
      this.movesList.forEach((moves) => {
        moves.forEach((move) => {
          if (!move) return false;
          const parsedMove = this.parseMove(move);
          console.log(copyField[parsedMove[1][0]]);
          console.log(copyField[parsedMove[0][0]]);
          copyField[parsedMove[1][0]][parsedMove[1][1]] = copyField[parsedMove[0][0]][parsedMove[0][1]];
          copyField[parsedMove[0][0]][parsedMove[0][1]] = "";
        });
      });
      copyField.forEach((row) => console.log(row.join("")));
    }
    addMove(move) {
      if (this.movesList.length && this.movesList[this.movesList.length - 1][1] !== "") {
        this.movesList.push([move, ""]);
      } else if (this.movesList.length) {
        this.movesList[this.movesList.length - 1][1] = move;
      } else if (this.movesList.length === 0) {
        this.movesList.push([move, ""]);
      }
    }
    showMoves() {
      this.movesList.length !== 0 && this.movesList.forEach((moves) => console.log(moves.join(" | ")));
    }
  };

  // main.ts
  var board = new Board();
  board.createField();
  board.showField();
  board.addMove("24:20");
  board.showMoves();
  board.showField();
})();

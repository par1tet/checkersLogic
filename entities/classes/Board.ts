import { IBoard } from "./../interfaces/IBoard.ts"

export class Board implements IBoard {
    field: string[][] = [[]]
    movesList: [string, string][] = []

    constructor(){
    }
    
    private parseMove(move){
        let splitedMove = (()=>{
            const splitByLine = move.split('-')

            if(splitByLine[0] === move){
                return move.split(':')
            }
            return splitByLine
        })()

        // Переводим из букв в координаты для поля
        splitedMove = splitedMove.map(move => [Math.floor(((+move) * 2) / this.field[0].length)-1,(((+move) * 2) % (this.field[0].length - 1))])

        return splitedMove
    }

    createField(){
        this.field = [
            [" ", "b", " ", "b", " ", "b", " ", "b"],
            ["b", " ", "b", " ", "b", " ", "b", " "],
            [" ", "b", " ", "b", " ", "b", " ", "b"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["w", " ", "w", " ", "w", " ", "w", " "],
            [" ", "w", " ", "w", " ", "w", " ", "w"],
            ["w", " ", "w", " ", "w", " ", "w", " "],
        ]
    }

    showField(){
        const copyField = Object.assign(this.field)
        
        this.movesList.forEach(moves => {
            moves.forEach(move => {
                if(!move) return false;
                
                const parsedMove = this.parseMove(move)

                console.log(copyField[parsedMove[1][0]])
                console.log(copyField[parsedMove[0][0]])

                copyField[parsedMove[1][0]][parsedMove[1][1]] = copyField[parsedMove[0][0]][parsedMove[0][1]]
                copyField[parsedMove[0][0]][parsedMove[0][1]] = ''
            })
        })

        copyField.forEach(row => console.log(row.join("")))
    }

    addMove(move: string){ 
        if(this.movesList.length && this.movesList[this.movesList.length - 1][1] !== ''){ 
            this.movesList.push([move,""]) 
        }else if(this.movesList.length){
            this.movesList[this.movesList.length - 1][1] = move
        }else if(this.movesList.length === 0){
            this.movesList.push([move,""])
        }
    }

    showMoves(){
        // Если список ходов не пуст, мы выводим их в консоль
        this.movesList.length !== 0 && this.movesList.forEach(moves => console.log(moves.join(" | ")))
    }
}
